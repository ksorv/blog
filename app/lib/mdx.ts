import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitles from 'remark-code-titles';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import { GetFileBySlug, GetFiles, GetAllFilesFrontMatter } from '~/types/mdx';
import { FrontMatter } from '~/types/blog';

const root = process.cwd();

export const getFiles: GetFiles = async (type) => {
  return fs.readdirSync(path.join(root, 'data', type));
};

export const getFileBySlug: GetFileBySlug = async (type, slug) => {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        [
          remarkAutolinkHeadings,
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        remarkCodeTitles
      ]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  };
};

export const getAllFilesFrontMatter: GetAllFilesFrontMatter = async (type) => {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts: FrontMatter[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...(data as FrontMatter),
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
};

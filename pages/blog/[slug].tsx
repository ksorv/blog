import { MDXRemote } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import { getFiles, getFileBySlug } from 'lib/mdx';
import BlogLayout from 'layouts/blog';
import MDXComponents from 'components/MDXComponents';
import { BlogPostProps } from 'types/blog';

const Blog: FC<BlogPostProps> = ({ mdxSource, frontMatter }) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
        }}
      />
    </BlogLayout>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('posts', params.slug as string);

  return { props: { ...post } };
};

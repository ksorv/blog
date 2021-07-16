import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface PostFrontMatter extends FrontMatter {
  wordCount?: number;
  readingTime?: number;
}

export type PostsFrontMatter = PostFrontMatter[];

export type FrontMatter = {
  title: string;
  summary: string;
  writtenOn: string;
  slug: string;
  tags: [string];
};

export type BlogPostProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: PostFrontMatter;
};

export type BlogLayoutProps = {
  frontMatter: PostFrontMatter;
};

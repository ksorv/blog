import { Message } from 'esbuild';

export interface FrontMatter {
  summary: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  socialImage: string;
  tags: [string];
  slug: string;
}

export interface Post {
  code: string;
  errors: Message[];
  frontmatter: FrontMatter;
}

export type BlogLayoutProps = {
  frontMatter: FrontMatter;
};

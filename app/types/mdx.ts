import { FrontMatter } from './blog';

interface IReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

type GetFileBySlugReturn = Promise<{
  mdxSource: unknown;
  frontMatter: {
    wordCount: number;
    readingTime: IReadTimeResults;
    slug: string | null;
  };
}>;

export type GetFileBySlug = (type: string, slug: string) => GetFileBySlugReturn;

export type GetFiles = (type: string) => Promise<string[]>;

export type GetAllFilesFrontMatter = (type: string) => Promise<FrontMatter[]>;

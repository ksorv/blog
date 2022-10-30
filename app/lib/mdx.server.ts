import { bundleMDX } from 'mdx-bundler';
import fs from 'fs';
import path from 'path';
import { FrontMatter } from '../types/blog';
import { Post } from '~/types/blog';

function fixEsbuildBinaryError() {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe',
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild',
    )
  }
}

fixEsbuildBinaryError();

const root = process.env.NODE_ENV === 'production' ? __dirname : process.cwd();

const dataDir =
  process.env.NODE_ENV === 'production'
    ? path.join(root, '../../public/data')
    : path.join(root, 'data');

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe'
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild'
  );
}

export const getFileBySlug = async (
  { type, slug, server = false }: {
    type: string,
    slug: string, server?: boolean
  }
): Promise<Post> => {
  const filePath = slug
    ? path.join(dataDir, type, slug)
    : path.join(dataDir, type);

  const { code, errors, frontmatter } = await bundleMDX({
    file: server ? filePath : `${filePath}.mdx`
  });

  return {
    code,
    errors,
    frontmatter: {
      ...frontmatter,
      slug: path.basename(filePath, '.mdx')
    } as FrontMatter
  };
};

export const getAllFilesFrontMatter = async (type: string) => {
  const files = fs.readdirSync(path.join(dataDir, type));

  return Promise.all(
    files.map((postSlug: string) => getFileBySlug({ type, slug: postSlug, server: true }))
  );
};

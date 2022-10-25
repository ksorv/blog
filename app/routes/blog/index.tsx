import React from 'react';
import { json, LoaderFunction } from '@remix-run/node';
import { Outlet, useCatch, useLoaderData } from '@remix-run/react';
import { getAllFilesFrontMatter } from '~/lib/mdx.server';
import { Post } from '~/types/blog';
import { BlogRow } from '~/components/blog/blog-row';

export const loader: LoaderFunction = async () => {
  try {
    const posts = await getAllFilesFrontMatter('posts');
    return json({ posts }, { status: 200, statusText: 'success' });
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw json(e, { status: 500, statusText: 'failed' });
  }
};

const Blog: React.FC = () => {
  const { posts } = useLoaderData<{ posts: Post[] }>();

  if (!posts || !posts.length) {
    return <p>Sorry, No Posts found!</p>
  }

  return (
    <>
      <h1 className="text-saccent">Blog</h1>
      {(posts as Post[]).map(({ frontmatter }) => (
        <BlogRow key={frontmatter.slug} frontmatter={frontmatter} />
      ))}
      <Outlet />
    </>
  );
};

export const CatchBoundary = () => {
  const { statusText, data } = useCatch();
  console.log(data);

  return (
    <div>
      <p>Error!: {statusText}</p>
      <p>{(data as Error).message}</p>
      <code>{(data as Error).stack}</code>
    </div>
  );
};

export default Blog;

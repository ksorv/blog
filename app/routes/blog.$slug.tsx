import { json, LoaderFunction } from '@remix-run/node';
import { useCatch, useLoaderData } from '@remix-run/react';
import { getFileBySlug } from '~/lib/mdx.server';
import { getMDXComponent } from 'mdx-bundler/client'
import { Post } from '~/types/blog';
import { useMemo } from 'react';

export const handle = {
  getSitemapEntries: async () => null
};

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { slug } = params;
    const post = await getFileBySlug({ type: 'posts', slug })
    return json(post, { status: 200, statusText: 'success' });
  } catch {
    throw json({ message: "The post most likely doesn't exist." }, { status: 500 });
  }
};

export default function Hello() {
  const { code } = useLoaderData<Post>();

  const Component = useMemo(() => getMDXComponent(code), [code])
  return <div><Component /></div>;
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </>
  );
}

type Error = {
  message: string;
  stack: string;
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </>
  );
}

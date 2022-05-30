import { json, LoaderFunction, useCatch } from 'remix';

export const handle = {
  getSitemapEntries: async () => null
};

export const loader: LoaderFunction = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw json({ intent: 'yes' }, { status: 404 });
};

export default function Hello() {
  return <p>You should not see this</p>;
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

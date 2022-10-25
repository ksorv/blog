import { useCatch } from '@remix-run/react';
import { MetaFunction } from '@remix-run/node';
import Link from '~/components/link';

export const meta: MetaFunction = () => {
  return {
    title: 'Saurav Khdoolia',
    description:
      'Building software using React and TypeScript to make the world a better place 🌎.'
  };
};

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-secondary/100">
      This is not yet up, But the blog has some posts{' '}
      <span>
        <Link to="blog">here</Link>
      </span>
    </div>
  );
}

export const CatchBoundary = () => {
  const { statusText } = useCatch();
  return <p>Error!: {statusText}</p>;
};

export const ErrorBoundary = () => {
  return <p>Error!</p>;
};
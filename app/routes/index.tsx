import { useCatch } from '@remix-run/react';
import { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return {
    title: 'Saurav Khdoolia',
    description:
      'Building software using React and TypeScript to make the world a better place 🌎.'
  };
};

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-primary/100">
      Being rebuilt with Remix, TypeScript, Cloudfare & Tailwind.
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

import { MetaFunction, useCatch } from 'remix';

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
      Being rebuilt with Remix, TypeScript, Netlify & Tailwind(probably).
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

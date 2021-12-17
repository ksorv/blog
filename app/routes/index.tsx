import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Saurav Khdoolia',
    description:
      'Building software using React and TypeScript to make the world a better place 🌎.'
  };
};

export default function Index() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      Being rebuilt with Remix, TypeScript, Netlify & Tailwind(probably).
    </div>
  );
}

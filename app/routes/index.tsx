import type { MetaFunction } from 'remix';

export let meta: MetaFunction = () => {
  return {
    title: 'Saurav Khdoolia',
    description:
      'Building software using React and TypeScript to make the world a better place 🌎.'
  };
};

export default function Index() {
  return (
    <div>
      Being rebuilt with Remix, TypeScript, Netlify & Tailwind(probably).
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Hey, there
      </h1>
      <Link href="/blog">Blog</Link>
    </>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <h1 className="text-2xl mb-4 text-black dark:text-white text-center">
        I&#39;m being worked on...
      </h1>
      <h4 className="text-lg mb-4 text-green-500 dark:text-white text-center">
        Thanks for checking me out :)
      </h4>
      <Link href="/twitter" prefetch={false}>
        <button className="bg-transparent focus:outline-none text-purple-500 hover:text-purple-600 hover:scale-105 hover:border-purple-500 px-3 py-2 border rounded">
          Check Mate
        </button>
      </Link>
    </div>
  );
}

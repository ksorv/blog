import Link from 'next/link';
import { Moon, Sun } from 'react-feather';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const isLight = theme === 'light';
  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      <button
        className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-600 p-2 rounded border border-transparent dark:hover:border-gray-500 hover:border-gray-400 cursor-pointer"
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
      >
        {isLight ? <Moon size={18} /> : <Sun size={18} />}
      </button>
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

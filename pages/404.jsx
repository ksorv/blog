import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Unavailable
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        So nice to see you here...
      </p>
      <Link href="/" prefetch={false}>
        <button className="bg-transparent focus:outline-none text-purple-500 hover:text-purple-600 hover:scale-105 hover:border-purple-500 px-3 py-2 border rounded">
          Wanna Return Home?
        </button>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { FC } from 'react';

const Tags: FC<{ tags: [string] }> = ({ tags }) => (
  <div className="px-4 flex items-center justify-start">
    {Array.isArray(tags) ? (
      tags.map((tag) => {
        return (
          <Link key={tag} href={`tags/${tag}`}>
            <a className="py-1 px-3 capitalize mx-2 text-gray-300 rounded border border-purple-700 bg-purple-600 hover:border-white dark:hover:border-black">
              {tag}
            </a>
          </Link>
        );
      })
    ) : (
      <span />
    )}
  </div>
);

export default Tags;

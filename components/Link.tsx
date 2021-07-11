import Link from 'next/link';
import { FC } from 'react';

const CustomLink: FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className="block text-black dark:text-white hover:text-purple-100 hover:bg-purple-600 dark:hover:bg-purple-600 py-2 px-3 rounded mx-2">
      {children}
    </a>
  </Link>
);

export default CustomLink;

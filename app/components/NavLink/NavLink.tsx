import React from 'react';
import { Link } from 'remix';
import { cx } from '~/utils/classnames';

export const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  active: boolean;
}> = ({ href, children, className, active }) => {
  return (
    <Link
      to={href}
      // hover:${hoverStyles}
      className={cx(
        { 'text-primary active': active },
        'navLink',
        `mx-4 my-2 py-3 md:py-0 w-full md:w-auto flex md:block border-b md:border-b-0 text-center font-semibold text-xl md:text-lg 
        text-secondary-accent hover:text-primary transition
        
        `,
        className
      )}
    >
      {children}
    </Link>
  );
};
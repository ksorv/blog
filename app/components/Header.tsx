import { useEffect, useState } from 'react';
import { Link, useLocation } from '@remix-run/react';
import { cx } from '~/utils/classnames';
import { Logo } from './Logo';
import NavLink from './link';
import { ThemeToggle } from './ThemeToggle';

const links = [
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

export const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileActive(false);
  }, [location]);

  const handleMediaQueryChange = () => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      setMobileActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleMediaQueryChange);
    return () => window.removeEventListener('resize', handleMediaQueryChange);
  }, []);

  return (
    <nav
      className={cx(
        'sticky top-0 bg-primary py-8 shadow-md shadow-[color:var(--primary)] backdrop-blur-[8px] [--tw-bg-opacity:0.8] md:pt-6 md:pb-4',
        {
          'fixed z-[100] h-full w-full bg-paccent': mobileActive
        }
      )}
    >
      <div className="mx-auto max-w-3xl px-4 md:flex md:items-center">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-[1px] text-xl text-saccent hover:text-secondary"
          >
            <p className="text-[1.75rem] font-bold">K</p>
            <Logo className="h-6 fill-tertiary" />
            <p className="text-[1.75rem] font-bold">ORV</p>
          </Link>
          <button
            className={cx(
              'group relative flex h-[36px] w-[44px] flex-col gap-1 rounded p-2 text-gray-600 transition md:static md:hidden',
              {
                'hover:animate-pulse motion-reduce:animate-none': mobileActive
              }
            )}
            id="navbar-toggle"
            onClick={() => setMobileActive(!mobileActive)}
          >
            <i
              className={cx(
                'block h-1 w-7 bg-saccent transition group-hover:bg-primary',
                {
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45':
                    mobileActive
                }
              )}
            />
            <i
              className={cx('block h-1 w-7 bg-primary', {
                hidden: mobileActive
              })}
            />
            <i
              className={cx(
                'block h-1 w-7 bg-saccent transition group-hover:bg-primary',
                {
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45':
                    mobileActive
                }
              )}
            />
          </button>
        </div>
        <div
          className={cx(
            'mt-3 hidden flex-col items-center md:ml-auto md:mt-0 md:flex md:flex-row',
            { '!flex h-full': mobileActive }
          )}
          id="navbar-collapse"
        >
          {links.map(({ label, href }) => (
            <NavLink
              key={href + location.pathname}
              to={href}
              className="underlined ml-8 text-xl"
              active={href === location.pathname}
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle className="md:mx-2" />
        </div>
      </div>
    </nav>
  );
};

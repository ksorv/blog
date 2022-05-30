import { useEffect, useState } from 'react';
import { Link, useLocation } from 'remix';
import { cx } from '~/utils/classnames';
import { Logo } from './Logo';
import { NavLink } from './NavLink/NavLink';
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
        'py-8 md:pt-6 md:pb-4 [--tw-bg-opacity:0.8] bg-primary-accent backdrop-blur-[8px] shadow-md shadow-[color:var(--primary)] sticky top-0',
        {
          'h-full fixed w-full bg-primary-accent z-[100]': mobileActive
        }
      )}
    >
      <div className="max-w-3xl px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl text-secondary-accent hover:text-primary flex items-center gap-[1px]"
          >
            <p className="text-[1.75rem] font-bold">K</p>
            <Logo className="h-6 mb-[0.2rem] fill-primary" />
            <p className="text-[1.75rem] font-bold">ORV</p>
          </Link>
          <button
            className={cx(
              'p-2 flex flex-col gap-1 rounded text-gray-600 md:hidden group transition relative md:static w-[44px] h-[36px]',
              {
                'hover:animate-pulse motion-reduce:animate-none': mobileActive
              }
            )}
            id="navbar-toggle"
            onClick={() => setMobileActive(!mobileActive)}
          >
            <i
              className={cx(
                'bg-secondary-accent group-hover:bg-primary w-7 h-1 block transition',
                {
                  'top-1/2 left-1/2 absolute rotate-45 -translate-x-1/2 -translate-y-1/2':
                    mobileActive
                }
              )}
            />
            <i
              className={cx('bg-primary w-7 h-1 block', {
                hidden: mobileActive
              })}
            />
            <i
              className={cx(
                'bg-secondary-accent group-hover:bg-primary w-7 h-1 block transition',
                {
                  'top-1/2 left-1/2 absolute -rotate-45 -translate-x-1/2 -translate-y-1/2':
                    mobileActive
                }
              )}
            />
          </button>
        </div>
        <div
          className={cx(
            'hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 items-center',
            { '!flex h-full': mobileActive }
          )}
          id="navbar-collapse"
        >
          {links.map(({ label, href }) => (
            <NavLink key={href} href={href} active={href === location.pathname}>
              {label}
            </NavLink>
          ))}
          <ThemeToggle className="md:mx-2" />
        </div>
      </div>
    </nav>
  );
};

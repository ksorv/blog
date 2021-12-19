import { Link, useLocation } from 'remix';
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
  const location = useLocation();
  return (
    <nav className="bg-white py-8 md:py-6">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl dark:text-secondary text-tertiary flex items-center gap-[1px]"
          >
            <p className="text-secondary-accent text-[1.75rem] font-bold">K</p>
            <Logo className="h-6 mb-[0.2rem] fill-primary" />
            <p className="text-secondary-accent text-[1.75rem] font-bold">
              ORV
            </p>
          </Link>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 items-center"
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

import { Link, useLocation } from 'remix';
import { cx } from '~/utils/classnames';
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

const CustomLink: React.FC<{
  to: string;
  active: boolean;
  disabled: boolean;
}> = ({ to, disabled, active, children }) => {
  const className = cx(
    'p-2 lg:px-4 text-lg flex items-center justify-center md:mx-2 text-secondary-accent rounded hover:bg-gray-200 hover:text-tertiary transition-colors duration-300',
    {
      'bg-primary': active,
      'bg-secondary-accent/20': disabled
    }
  );
  return (
    <Link to={to} prefetch="intent" className={className}>
      {children}
    </Link>
  );
};

export const Header = () => {
  const location = useLocation();
  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl dark:text-secondary text-tertiary"
          >
            kSorv
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

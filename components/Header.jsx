import { useRecoilState, useRecoilValue } from 'recoil';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'react-feather';
import CustomLink from 'components/Link';
import { showHeaderAtom } from '../stores/ui';

const Header = () => {
  const showHeader = useRecoilValue(showHeaderAtom);
  const { resolvedTheme, setTheme } = useTheme();

  const isLight = resolvedTheme === 'light';

  if (showHeader) {
    return (
      <header className="flex items-center justify-between w-full max-w-4xl mx-auto sticky top-0 p-4 header">
        <a href="/">
          <div className="logo text-lg">
            <span className="text-purple-700 dark:text-gray-400 font-bold">
              Saurav
            </span>
            <span> </span>
            <span className="text-gray-600 dark:text-purple-400 font-normal">
              Khdoolia
            </span>
          </div>
        </a>
        <div className="flex items-center justify-between">
          <CustomLink href="/blog" content="Blog" />
          <CustomLink href="/about" content="About" />
          <button
            className="bg-gray-300 dark:bg-gray-600 p-2 rounded border border-transparent dark:hover:border-gray-500 hover:border-gray-400 cursor-pointer"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </header>
    );
  }

  return <span />;
};

export const useHeader = () => {
  const [showHeader, setShowHeader] = useRecoilState(showHeaderAtom);

  return { showHeader, setShowHeader };
};

export default Header;

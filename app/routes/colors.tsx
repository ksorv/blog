import { useState } from 'react';
import { cx } from '../../utils/classnames';

const Colors: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={cx(
        'w-full h-full flex items-center justify-center gap-6',
        darkMode ? 'bg-secondary-accent' : 'bg-primary-accent'
      )}
    >
      <div
        className={cx(
          'h-36 w-36 rounded bg-primary flex items-center justify-center font-extrabold text-8xl',
          !darkMode ? 'text-secondary-accent' : 'text-primary-accent'
        )}
      >
        X
      </div>
      <div
        className={cx(
          'h-36 w-36 rounded bg-secondary flex items-center justify-center font-extrabold text-8xl',
          darkMode ? 'text-secondary-accent' : 'text-primary-accent'
        )}
      >
        X
      </div>
      <div
        className={cx(
          'h-36 w-36 rounded bg-tertiary flex items-center justify-center font-extrabold text-8xl',
          !darkMode ? 'text-secondary-accent' : 'text-primary-accent'
        )}
      >
        X
      </div>
      <div className="flex flex-col h-36 w-36 items-center justify-between">
        <button
          onClick={toggleTheme}
          className="h-16 w-16 p-4 rounded-full text-secondary-accent bg-primary-accent shadow shadow-secondary-accent cursor-pointer"
        >
          P
        </button>
        <button
          onClick={toggleTheme}
          className="h-16 w-16 p-4 rounded-full text-primary-accent bg-secondary-accent shadow shadow-primary-accent cursor-pointer"
        >
          S
        </button>
      </div>
    </div>
  );
};

export default Colors;

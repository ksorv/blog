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
        'w-full flex flex-col items-center justify-center gap-12 p-16',
        darkMode ? 'bg-secondary-accent' : 'bg-primary-accent'
      )}
    >
      <div className="flex h-36 w-36 items-center justify-between">
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
      <div className="rounded p-6 shadow flex flex-col gap-4 text-primary">
        <h1 className="font-bold text-5xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h1>
        <h2 className="font-bold text-4xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h2>
        <h3 className="font-bold text-3xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h3>
        <h4 className="font-semibold text-3xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h4>
      </div>
      <div className="rounded p-6 shadow flex flex-col gap-4 text-secondary">
        <h1 className="font-bold text-5xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h1>
        <h2 className="font-bold text-3xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h2>
        <h3 className="font-bold text-2xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h3>
        <h4 className="font-semibold text-2xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h4>
      </div>
      <div className="rounded p-6 shadow flex flex-col gap-4 text-tertiary">
        <h1 className="font-bold text-5xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h1>
        <h2 className="font-bold text-3xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h2>
        <h3 className="font-bold text-2xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h3>
        <h4 className="font-semibold text-2xl">
          The Quick Brown Fox Jumped over the hill to see who was there?
        </h4>
      </div>
    </div>
  );
};

export default Colors;

import { Outlet, useCatch } from 'remix';
import { cx } from '~/utils/classnames';
import { ThemeToggle } from '~/components/ThemeToggle';

const Colors: React.FC = () => {
  return (
    <div
      className={cx(
        'w-full h-full flex flex-col items-center justify-center gap-8',
        'bg-primary-accent'
      )}
    >
      <div className="flex items-center justify-center gap-6">
        <div
          className={cx(
            'h-36 w-36 rounded bg-primary flex items-center justify-center font-extrabold text-8xl',
            'text-secondary-accent'
          )}
        >
          Y
        </div>
        <div
          className={cx(
            'h-36 w-36 rounded bg-secondary flex items-center justify-center font-extrabold text-8xl',
            'text-primary-accent'
          )}
        >
          X
        </div>
        <div
          className={cx(
            'h-36 w-36 rounded bg-tertiary flex items-center justify-center font-extrabold text-8xl',
            'text-secondary-accent'
          )}
        >
          Y
        </div>
        <div className="flex flex-col h-36 w-36 items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export const CatchBoundary = () => {
  const { statusText } = useCatch();
  return <p>Error!: {statusText}</p>;
};

export default Colors;

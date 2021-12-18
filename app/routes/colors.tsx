import { json, LoaderFunction, useLoaderData } from 'remix';
import { cx } from '~/utils/classnames';
import { ThemeToggle } from '~/components/ThemeToggle';
import { getSession } from '~/lib/theme';

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getSession(request.headers.get('Cookie'));
  const currentTheme = themeSession.get('theme');
  return json({ theme: currentTheme }, { status: 200 });
};

const Colors: React.FC = () => {
  const { theme } = useLoaderData();

  return (
    <div
      className={cx(
        'w-full h-full flex items-center justify-center gap-6',
        'bg-primary-accent'
      )}
    >
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
        <ThemeToggle theme={theme} />
      </div>
    </div>
  );
};

export default Colors;

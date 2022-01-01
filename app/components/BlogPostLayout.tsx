import { cx } from '~/utils/classnames';

export const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <main
      className={cx(
        'flex-grow overflow-y-scroll prose min-w-full text-secondary-accent',
        'wrapper'
      )}
    >
      {children}
    </main>
  );
};

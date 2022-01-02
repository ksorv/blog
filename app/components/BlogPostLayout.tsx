import { cx } from '~/utils/classnames';

export const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <main
      className={cx(
        'flex-grow overflow-y-scroll prose dark:prose-invert prose-indigo prose-stone prose-sm md:prose-base lg:prose-lg min-w-full prose-h1:font-extrabold',
        'wrapper post'
      )}
    >
      {children}
    </main>
  );
};

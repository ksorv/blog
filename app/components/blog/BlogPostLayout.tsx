import { cx } from '~/utils/classnames';

export const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <div
      className={cx(
        // 'overflow-y-scroll prose dark:prose-invert prose-indigo prose-stone prose-sm md:prose-base lg:prose-lg min-w-full prose-h1:font-extrabold',
        'post'
      )}
    >
      {children}
    </div>
  );
};

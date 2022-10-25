import { Link } from '@remix-run/react';
import { FrontMatter } from '~/types/blog';

export const BlogRow: React.FC<{ frontmatter: FrontMatter }> = ({
  frontmatter
}) => {
  const { title, description, slug } = frontmatter;
  // TODO: add cache control headers to remove continous reload of prefetch links
  return (
    <Link
      to={slug}
      prefetch="intent"
      style={{ textDecoration: 'none', color: 'currentcolor' }}
    >
      <div className="group mb-12 cursor-pointer rounded-lg border border-indigo-100 p-6 shadow hover:border-saccent dark:border-gray-700 dark:hover:border-saccent">
        <h3 className="!m-0 group-hover:!text-secondary">{title}</h3>
        <p className="group-hover:bg-red !m-0 !mt-3">{description}</p>
      </div>
    </Link>
  );
};

import propTypes from 'prop-types';
import { useQuery } from 'react-query';
import format from 'date-fns/format';
import { FC } from 'react';
import { FrontMatter } from 'types/blog';

const BlogPostCard: FC<FrontMatter> = ({
  title,
  summary,
  writtenOn = null,
  slug
}) => {
  const {
    data = { total: 0 },
    isLoading,
    isError
  } = useQuery<{ total: number }>(`/views/${slug}`, {
    staleTime: 3 * 60 * 1000,
    refetchOnWindowFocus: false
  });

  const { total } = data;

  const lastUpdatedOn = new Date(writtenOn);

  return (
    <div className="flex flex-col">
      <div className="text-base font-bold text-black">{title}</div>
      <div className="flex items-center justify-start">
        {lastUpdatedOn && (
          <>
            <span className="text-xs font-light">
              Last Updated On: {format(lastUpdatedOn, 'MMM Do yyyy')}
            </span>
            <span className="text-xs font-light">{' | '}</span>
          </>
        )}
        <span className="text-xs font-light">
          {isLoading || isError ? '--' : total}
        </span>
      </div>
      <div className="text-sm font-normal">{summary}</div>
    </div>
  );
};

BlogPostCard.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  writtenOn: propTypes.string.isRequired,
  slug: propTypes.string.isRequired
};

export default BlogPostCard;

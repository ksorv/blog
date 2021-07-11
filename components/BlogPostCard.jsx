import propTypes from 'prop-types';
import { useQuery } from 'react-query';
import format from 'date-fns/format';

const BlogPostCard = ({
  title,
  summary,
  writtenOn = null,
  updatedOn,
  slug
}) => {
  const { data, isLoading, isError } = useQuery(`/views/${slug}`, {
    staleTime: 3 * 60 * 1000,
    refetchOnWindowFocus: false
  });

  const lastUpdatedOn = new Date(updatedOn || writtenOn);

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
          {isLoading || isError ? '--' : data.total}
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
  slug: propTypes.string.isRequired,
  updatedOn: propTypes.string
};

BlogPostCard.defaultProps = {
  updatedOn: undefined
};

export default BlogPostCard;

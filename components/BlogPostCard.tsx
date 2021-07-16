import propTypes from 'prop-types';
import format from 'date-fns/format';
import { FC } from 'react';
import { FrontMatter } from 'types/blog';
import Tags from './Tags';

const BlogPostCard: FC<FrontMatter> = ({
  title,
  summary,
  writtenOn = null,
  tags
}) => {
  const lastUpdatedOn = new Date(writtenOn);

  return (
    <div className="flex flex-col p-4 my-8 border-2 rounded-lg border-dotted border-purple-300 hover:border-purple-700 dark:border-purple-600 dark:hover:border-purple-300 relative blogPostCard">
      <div className="text-4xl font-bold pb-1 capitalize text-black dark:text-white">
        {title}
      </div>
      <div className="flex items-center justify-start pt-2 pb-3">
        {lastUpdatedOn && (
          <>
            <span className="text-md font-light">
              On {format(lastUpdatedOn, 'MMM do yyyy')}
            </span>
          </>
        )}
        <Tags tags={tags} />
      </div>
      <div className="text-base font-normal">{summary}</div>
    </div>
  );
};

BlogPostCard.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  writtenOn: propTypes.string.isRequired
};

export default BlogPostCard;

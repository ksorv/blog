import propTypes from 'prop-types';
import format from 'date-fns/format';
import { FC } from 'react';
import { FrontMatter } from 'types/blog';
import { Heading, Text } from '@chakra-ui/react';
import Tags from './Tags';

const BlogPostCard: FC<FrontMatter> = ({
  title,
  summary,
  date = null,
  tags
}) => {
  const lastUpdatedOn = new Date(date);

  return (
    <div className="flex flex-col p-4 my-8 border-2 rounded-lg border-dotted border-purple-300 hover:border-purple-700 dark:border-purple-600 dark:hover:border-purple-300 relative blogPostCard">
      <Heading size="lg">{title}</Heading>
      <Text>
        {lastUpdatedOn && (
          <>
            <span className="text-md font-light">
              On {format(lastUpdatedOn, 'MMM do yyyy')}
            </span>
          </>
        )}
        <Tags tags={tags} />
      </Text>
      <div className="text-base font-normal">{summary}</div>
    </div>
  );
};

BlogPostCard.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  date: propTypes.string.isRequired
};

export default BlogPostCard;

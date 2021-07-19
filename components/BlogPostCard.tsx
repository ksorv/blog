import propTypes from 'prop-types';
import format from 'date-fns/format';
import { FC } from 'react';
import { FrontMatter } from 'types/blog';
import { Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Tags from './Tags';

const BlogPostCard: FC<FrontMatter> = ({
  title,
  summary,
  date = null,
  tags,
  slug
}) => {
  const lastUpdatedOn = new Date(date);
  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';

  const { data: { total = 0 } = {} } = useQuery<{ total: number }>(
    `/views/${slug}`
  );

  return (
    <Flex
      flexDirection="column"
      padding={4}
      marginY={8}
      borderWidth={2}
      borderStyle="dotted"
      borderColor={isLight ? 'purple.300' : 'purple.600'}
      borderRadius={8}
      position="relative"
      cursor="pointer"
      _hover={{
        borderColor: isLight ? 'purple.700' : 'purple.300',
        _after: {
          content: '""',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '-16px',
          height: '90%',
          borderRadius: '4px',
          border: '4px mediumpurple double'
        }
      }}
    >
      {/* <div className="flex flex-col p-4 my-8 border-2 rounded-lg border-dotted border-purple-300 hover:border-purple-700 dark:border-purple-600 dark:hover:border-purple-300 relative blogPostCard"> */}
      <Heading size="lg" color={isLight ? 'indianred' : 'yellow'}>
        {title}
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="8px"
      >
        <Text>
          {lastUpdatedOn && (
            <>
              <span className="text-md font-light">
                On {format(lastUpdatedOn, 'MMM do yyyy')}
              </span>
            </>
          )}{' '}
          | {total} views
        </Text>
        <Tags tags={tags} />
      </Flex>
      <div className="text-base font-normal">{summary}</div>
    </Flex>
  );
};

BlogPostCard.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  date: propTypes.string.isRequired
};

export default BlogPostCard;

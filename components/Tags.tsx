import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

const Tags: FC<{ tags: [string] }> = ({ tags }) => (
  <div className="px-4 flex items-center justify-start">
    {Array.isArray(tags) ? (
      tags.map((tag) => {
        return (
          <NextLink key={tag} href={`tags/${tag}`}>
            <Link
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              paddingX="8px"
              paddingY="4px"
              backgroundColor="brand.500"
              borderRadius="4px"
              marginX="8px"
              textTransform="uppercase"
              fontSize="14px"
              color="gray.300"
              // TODO: enable it when tags page is ready
              pointerEvents="none"
            >
              {tag}
            </Link>
          </NextLink>
        );
      })
    ) : (
      <span />
    )}
  </div>
);

export default Tags;

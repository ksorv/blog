import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

const Tags: FC<{ tags: [string] }> = ({ tags }) => (
  <div className="px-4 flex items-center justify-start">
    {Array.isArray(tags) ? (
      tags.map((tag) => {
        return (
          <NextLink key={tag} href={`tags/${tag}`}>
            <Button variant="solid">{tag}</Button>
          </NextLink>
        );
      })
    ) : (
      <span />
    )}
  </div>
);

export default Tags;

import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

const allColors = {
  light: [
    'bisque',
    'aquamarine',
    'cadetblue',
    'coral',
    'cornflowerblue',
    'darkgoldenrod',
    'lightblue',
    'darkkhaki',
    'darksalmon',
    'darkseagreen',
    'darkturquoise',
    'thistle'
  ],
  dark: [
    'black',
    'brown',
    'blue',
    'blueviolet',
    'crimson',
    'darkcyan',
    'darkgoldenrod',
    'darkgreen',
    'darkmagenta',
    'darkolivegreen',
    'darkochid',
    'darkred'
  ]
};

const Tags: FC<{ tags: [string] }> = ({ tags }) => {
  const colors = useColorModeValue(allColors.light, allColors.dark);
  const color = useColorModeValue('black', 'gray.300');

  return (
    <div className="px-4 flex items-center justify-start">
      {Array.isArray(tags) ? (
        tags.map((tag) => {
          const bgColor = colors[Math.floor(Math.random() * 12)];
          return (
            <NextLink key={tag} href={`tags/${tag}`}>
              <Link
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                paddingX="8px"
                paddingY="4px"
                backgroundColor={bgColor}
                borderRadius="4px"
                marginX="8px"
                textTransform="uppercase"
                fontSize="14px"
                color={color}
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
};

export default Tags;

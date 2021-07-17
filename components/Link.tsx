import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

const CustomLink: FC<{ href: string; showActive?: boolean }> = ({
  href,
  children,
  showActive = true
}) => {
  const router = useRouter();
  const isActive = showActive && router.pathname === href;
  return (
    <NextLink href={href} passHref>
      <Link
        color={isActive ? 'green.600' : 'brand.400'}
        textDecoration={isActive ? 'underline' : 'unset'}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default CustomLink;

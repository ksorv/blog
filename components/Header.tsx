import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import { Sun, Moon } from 'react-feather';
import Link from 'next/link';
import { FC } from 'react';
import { Button, Container, Flex, useColorMode } from '@chakra-ui/react';
import Logo from 'images/fullLogo.svg';
import { showHeaderAtom } from 'stores/ui';
import CustomLink from './Link';

const Header: FC = () => {
  const showHeader = useRecoilValue(showHeaderAtom);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      as="header"
      opacity={showHeader ? 90 : 0}
      style={{ backdropFilter: 'blur(8px)' }}
      zIndex={20}
      width="full"
      maxWidth="full"
      position="sticky"
      top={0}
      gridArea="header"
      transitionProperty="all"
      transitionDuration="200ms"
      transitionTimingFunction="ease-in"
      background={
        colorMode === 'light' ? 'whiteAlpha.800' : 'blackAlpha.800   '
      }
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="4xl"
        marginX="auto"
      >
        <Link href="/">
          <a>
            <Logo className="logo" />
          </a>
        </Link>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          padding={4}
          gridGap={8}
        >
          <CustomLink href="/blog">Blog</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <Button padding={1} onClick={toggleColorMode}>
            {colorMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export type UseFooter = () => {
  showHeader: boolean;
  setShowHeader: SetterOrUpdater<boolean>;
};

export const useHeader: UseFooter = () => {
  const [showHeader, setShowHeader] = useRecoilState(showHeaderAtom);

  return { showHeader, setShowHeader };
};

export default Header;

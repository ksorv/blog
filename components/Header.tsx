import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import { Sun, Moon } from 'react-feather';
import Link from 'next/link';
import { FC } from 'react';
import { Button, Container, Flex, useColorMode } from '@chakra-ui/react';
import { showHeaderAtom } from '../stores/ui';
import Logo from '../images/fullLogo.svg';
import CustomLink from './Link';

const Header: FC = () => {
  const showHeader = useRecoilValue(showHeaderAtom);

  const { colorMode, toggleColorMode } = useColorMode();

  if (showHeader) {
    return (
      <Container
        as="header"
        style={{ backdropFilter: 'blur(8px' }}
        zIndex={20}
        width="full"
        maxWidth="full"
        position="sticky"
        top={0}
        gridArea="header"
        opacity={90}
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
            <Logo className="logo" />
            {/* <Text
              fontWeight="bold"
              textColor="brand.600"
              fontSize="2xl"
              cursor="pointer"
            >
              Saurav Khdoolia
            </Text> */}
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
  }

  return <span />;
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

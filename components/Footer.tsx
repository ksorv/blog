import { Container, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import Logo from 'images/fullLogo.svg';
import { showFooterAtom } from 'stores/ui';
import CustomLink from './Link';

const Footer: FC = () => {
  const showFooter = useRecoilValue(showFooterAtom);

  if (showFooter) {
    return (
      <Container width="full" maxWidth="full">
        <Flex
          width="4xl"
          as="footer"
          alignItems="center"
          justifyContent="space-between"
          gridArea="footer"
          marginX="auto"
          marginTop="16px"
          paddingY="16px"
        >
          <Logo className="logo" />
          <CustomLink href="about">About</CustomLink>
        </Flex>
      </Container>
    );
  }

  return <span />;
};

export type UseFooter = () => {
  showFooter: boolean;
  setShowFooter: SetterOrUpdater<boolean>;
};

export const useFooter: UseFooter = () => {
  const [showFooter, setShowFooter] = useRecoilState(showFooterAtom);

  return { showFooter, setShowFooter };
};

export default Footer;

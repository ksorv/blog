import { Container, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil';
import Logo from 'images/fullLogo.svg';
import { showFooterAtom } from 'stores/ui';
import CustomLink from './Link';

const Footer: FC = () => {
  const showFooter = useRecoilValue(showFooterAtom);

  return (
    <Container
      width="full"
      maxWidth="full"
      gridArea="footer"
      opacity={showFooter ? 100 : 0}
      transitionProperty="all"
      transitionDuration="200ms"
      transitionTimingFunction="ease-in"
    >
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

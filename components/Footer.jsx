import { useRecoilState, useRecoilValue } from 'recoil';
import { showFooterAtom } from '../stores/ui';

const Footer = () => {
  const showFooter = useRecoilValue(showFooterAtom);

  if (showFooter) {
    return (
      <footer className="flex items-center justify-center w-full max-w-4xl border mx-auto footer">
        Footer
      </footer>
    );
  }

  return <span />;
};

export const useFooter = () => {
  const [showFooter, setShowFooter] = useRecoilState(showFooterAtom);

  return { showFooter, setShowFooter };
};

export default Footer;

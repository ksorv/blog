import { useRecoilState, useRecoilValue } from 'recoil';
import { showHeaderAtom } from '../stores/ui';

const Header = () => {
  const showHeader = useRecoilValue(showHeaderAtom);

  if (showHeader) {
    return <>I&#39;m head</>;
  }

  return <span />;
};

export const useHeader = () => {
  const [showHeader, setShowHeader] = useRecoilState(showHeaderAtom);

  return { showHeader, setShowHeader };
};

export default Header;

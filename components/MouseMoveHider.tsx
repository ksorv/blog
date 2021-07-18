import { FC, useEffect } from 'react';
import { useFooter } from './Footer';
import { useHeader } from './Header';

export const MouseMoveHider: FC = () => {
  let mouseTimer;
  const { setShowHeader } = useHeader();
  const { setShowFooter } = useFooter();
  const mouseMove = () => {
    if (mouseTimer) {
      clearTimeout(mouseTimer);
      setShowHeader(true);
      setShowFooter(true);
      mouseTimer = undefined;
    }
    mouseTimer = setTimeout(() => {
      setShowHeader(false);
      setShowFooter(false);
    }, 1000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove, true);

    return () => document.removeEventListener('mousemove', mouseMove, true);
  }, []);

  return <span />;
};

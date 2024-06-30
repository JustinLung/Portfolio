import { media } from '@/utils/media';
import { useRef, useEffect } from 'react';

export const useVhFix = () => {
  const clientHeight = useRef(0);

  useEffect(() => {
    // VH Hack
    const _html = document.documentElement;
    _html.style.setProperty('--svh', _html.clientHeight * 0.01 + 'px');
    clientHeight.current = _html.clientHeight;

    const doResize = () => {
      if (window.matchMedia(media.tablet.min)) {
        _html.style.setProperty('--svh', _html.clientHeight * 0.01 + 'px');
        return;
      }

      if (
        _html.clientHeight - clientHeight.current > 80 ||
        _html.clientHeight - clientHeight.current < -80
      ) {
        _html.style.setProperty('--svh', _html.clientHeight * 0.01 + 'px');
        clientHeight.current = _html.clientHeight;
      }
    };

    window.addEventListener('resize', doResize, { passive: true });
    return () => {
      window.removeEventListener('resize', doResize);
    };
  }, []);
};

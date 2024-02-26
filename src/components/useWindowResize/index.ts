import { useCallback, useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowResize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 0,
    width: 0,
  });

  const handleWindowSizeChange = useCallback(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useLayoutEffect(() => {
    handleWindowSizeChange();

    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, [handleWindowSizeChange]);

  return windowSize;
};

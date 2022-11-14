// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const WindowContext = createContext({});

export function WindowContextProvider (props) {
  const { children } = props;

  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize () {
      setScreenWidth(window.innerWidth);
    }
    if (window !== undefined) {
      setScreenWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const windowContext = useMemo(() => ({ screenWidth }), [screenWidth]);

  return <WindowContext.Provider value={windowContext}>{children}</WindowContext.Provider>;
}

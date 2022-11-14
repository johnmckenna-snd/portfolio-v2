// eslint-disable-next-line no-unused-vars
import React from 'react';

import { WindowContextProvider } from './src/context/windowContext';

// eslint-disable-next-line import/prefer-default-export
export function wrapRootElement ({ element }) {
  return (
    <WindowContextProvider>{element}</WindowContextProvider>
  );
}

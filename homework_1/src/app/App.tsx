import type { ReactNode } from 'react';

import { ErrorBoundary } from '../shared/ErrorBoundary';

function App(): ReactNode {
  return (
    <ErrorBoundary>
      <h1>Hello, Y_LAB!</h1>
    </ErrorBoundary>
  );
}

export default App;

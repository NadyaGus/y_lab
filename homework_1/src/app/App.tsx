import type { ReactNode } from 'react';

import { SignIn } from '@/pages/SignIn/SignIn';
import { ErrorBoundary } from '@/shared/ErrorBoundary';
import { Header } from '@/shared/header/Header';

import './App.css';

function App(): ReactNode {
  return (
    <ErrorBoundary>
      <Header />
      <SignIn />
    </ErrorBoundary>
  );
}

export default App;

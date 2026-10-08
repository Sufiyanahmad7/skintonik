import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { ThankYou } from './pages/ThankYou';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/thank-you' || currentPath === '/thank-you/') {
    return <ThankYou />;
  }

  return <Home />;
};

export default App;

import React from 'react';
import Navigator from './navigation/Navigator';
import { AppProvider, SystemProvider } from './context';

const App = () => {
  return (
    <SystemProvider>
      <AppProvider>
        <Navigator />
      </AppProvider>
    </SystemProvider>
  );
};

export default App;

import React from 'react';
import Navigator from './navigation/Navigator';
import { AppProvider, DesignSystemProvider } from './context';

const App = () => {
  return (
    <DesignSystemProvider>
      <AppProvider>
        <Navigator />
      </AppProvider>
    </DesignSystemProvider>
  );
};

export default App;

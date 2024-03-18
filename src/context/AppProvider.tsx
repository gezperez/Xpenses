import React, { createContext, ReactNode, useState } from 'react';

type AppContextType = {
  onChangeState: () => void;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType>({
  onChangeState: () => {},
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [test, setTest] = useState();

  const onChangeState = () => {
    setTest(test);
  };

  return (
    <AppContext.Provider
      value={{
        onChangeState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

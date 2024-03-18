import { createContext, ReactNode, useState } from 'react';
import { SystemContextType, Theme } from '~/types';
import { darkTheme, lightTheme } from '~/utils';

export const SystemProviderContext = createContext<SystemContextType>({
  theme: lightTheme,
  setAppTheme: () => {},
  toggleAppTheme: () => {},
});

type SystemProviderProps = {
  children: ReactNode;
};

const SystemProvider = ({ children }: SystemProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const setAppTheme = (newTheme: Theme) => {
    setAppTheme(newTheme);
  };

  const toggleAppTheme = () => {
    setTheme((prevTheme: Theme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };

  return (
    <SystemProviderContext.Provider
      value={{
        theme,
        setAppTheme,
        toggleAppTheme,
      }}
    >
      {children}
    </SystemProviderContext.Provider>
  );
};

export default SystemProvider;

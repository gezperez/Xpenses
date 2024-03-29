import { createContext, ReactNode, useState } from 'react';
import { DesignSystemContextType, Theme } from '~/types';
import { darkTheme, lightTheme } from '~/utils';

export const DesignSystemProviderContext =
  createContext<DesignSystemContextType>({
    theme: lightTheme,
    setAppTheme: () => {},
    toggleAppTheme: () => {},
    isDarkTheme: false,
  });

type DesignSystemProviderProps = {
  children: ReactNode;
};

const SystemProvider = ({ children }: DesignSystemProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const setAppTheme = (newTheme: Theme) => {
    setAppTheme(newTheme);
  };

  const toggleAppTheme = () => {
    setTheme((prevTheme: Theme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };

  const isDarkTheme = theme !== lightTheme;

  return (
    <DesignSystemProviderContext.Provider
      value={{
        theme,
        setAppTheme,
        toggleAppTheme,
        isDarkTheme,
      }}
    >
      {children}
    </DesignSystemProviderContext.Provider>
  );
};

export default SystemProvider;

import React, { createContext, useMemo } from 'react';
import { Themes, useThemeToggle } from '~/utils/useThemeToggle';

type ThemeConfigType = {
  isDarkTheme: boolean;
  setTheme: (theme: Themes) => void;
  theme: Themes | undefined;
};

const GlobalContext = createContext<ThemeConfigType>({
  isDarkTheme: false,
  setTheme: () => {},
  theme: undefined
});

const GlobalStateProvider: React.FC<{ theme?: Themes | undefined }> = ({
  children,
  theme: argTheme
}) => {
  const { setTheme, isDarkTheme, theme } = useThemeToggle(argTheme);

  const contextValue = useMemo(() => {
    return { setTheme, isDarkTheme, theme };
  }, [isDarkTheme, theme]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalStateProvider, GlobalContext };

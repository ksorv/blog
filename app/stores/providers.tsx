import React, { createContext } from 'react';
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
const { Provider } = GlobalContext;

const GlobalStateProvider: React.FC<{ theme: Themes }> = ({
  children,
  theme: argTheme
}) => {
  const { setTheme, isDarkTheme, theme } = useThemeToggle(argTheme);

  return (
    <Provider value={{ setTheme, isDarkTheme, theme }}>{children}</Provider>
  );
};

export { GlobalStateProvider, GlobalContext };

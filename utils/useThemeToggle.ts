import { useEffect, useRef, useState } from 'react';

export enum Themes {
  light = 'light',
  dark = 'dark'
}

const ThemeKey = 'theme';

export function useThemeToggle(initTheme?: Themes) {
  const [theme, setTheme] = useState<Themes>(() => {
    if (initTheme && initTheme in Themes) {
      return initTheme;
    }

    if (typeof document !== 'undefined') {
      const localTheme = localStorage.getItem(ThemeKey);
      if (localTheme && localTheme in Themes) {
        return localTheme as Themes;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Themes.dark
        : Themes.light;
    }

    return Themes.dark;
  });

  const mountRun = useRef(false);

  useEffect(() => {
    // lets not run this on the first mount/render
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) return;

    localStorage.setItem(ThemeKey, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setTheme(mediaQuery.matches ? Themes.dark : Themes.light);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isDarkTheme = theme === Themes.dark;

  return { theme, setTheme, isDarkTheme };
}

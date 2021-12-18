import { useEffect, useRef, useState } from 'react';
import { useFetcher } from 'remix';

export enum Themes {
  light = 'light',
  dark = 'dark'
}

const ThemeKey = 'ksorv-theme';

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

  const persistTheme = useFetcher();
  // TODO: remove this when persistTheme is memoized properly
  // from: https://github.com/kentcdodds/kentcdodds.com/blob/388084ff3c2bb9c4a71fcea90b35264b90fb70ac/app/utils/theme-provider.tsx#L61
  const persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);

  useEffect(() => {
    // lets not run this on the first mount/render
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) return;

    localStorage.setItem(ThemeKey, theme);

    persistThemeRef.current.submit(
      { theme },
      { action: 'actions/theme', method: 'post' }
    );
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

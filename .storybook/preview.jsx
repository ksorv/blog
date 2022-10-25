import React, { useState } from 'react';
import { addDecorator } from '@storybook/react'
import { RecoilRoot } from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query'
import '@storybook/addon-console';
import { themes, ThemeProvider } from '@storybook/theming';
import defaultQueryFn from '~/lib/fetcher'
import "~/styles/global.css"
import Button from "~/components/button"
import {cx} from "~/utils/classnames"
import "~/styles/tailwindIn.css"
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn
    }
  }
})

const Providers = ({children}) => {
  const [theme, setTheme] = useState('light');

  return <ThemeProvider theme={theme === 'dark' ? themes.light : themes.dark}> 
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "solid 2px palevioletred",
      borderRadius: 4,
      position: "relative"
    }} className={cx("max-w-4xl", {"dark": theme === "dark"})}>
      <div className={cx("w-full h-full bg-primary flex items-center justify-center")}>
        <Button style={{
          right: 8,
          top: 8,
          position: "absolute"
        }} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"}</Button>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RecoilRoot>
              {children}
            </RecoilRoot>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  </ThemeProvider>
}

const AppDecorator = (storyFn) => {
  return (
      <Providers>{storyFn()}</Providers>
  );
};

addDecorator(AppDecorator);
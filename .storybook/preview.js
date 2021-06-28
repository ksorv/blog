import React from 'react';
import { addDecorator } from '@storybook/react'
import { RecoilRoot } from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query'
import '@storybook/addon-console';
import {defaultQueryFn} from '../lib/fetcher'
import "../styles/global.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn
    }
  }
})

const Providers = ({children}) => <> 
  <div className="max-w-4xl max-h-content flex items-center justify-center">
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </QueryClientProvider>
  </div>
</>

const AppDecorator = (storyFn) => {
  return (
    <Providers>{storyFn()}</Providers>
  );
};

addDecorator(AppDecorator);
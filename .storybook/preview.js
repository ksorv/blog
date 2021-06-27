import React from 'react';
import { addDecorator } from '@storybook/react'
import { RecoilRoot } from 'recoil';
import '@storybook/addon-console';
import "../styles/global.css"

const Providers = ({children}) => <> 
  <div className="max-w-4xl max-h-content flex items-center justify-center">
      <RecoilRoot>
        {children}
      </RecoilRoot>
  </div>
</>

const AppDecorator = (storyFn) => {
  return (
    <Providers>{storyFn()}</Providers>
  );
};

addDecorator(AppDecorator);
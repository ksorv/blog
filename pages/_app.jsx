import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import MDXComponents from 'components/MDXComponents';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { defaultQueryFn } from '../lib/fetcher';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Header />
            <main className="w-full max-w-2xl mx-auto main-content">
              <Component {...pageProps} />
            </main>
            <Footer />
          </RecoilRoot>
        </QueryClientProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

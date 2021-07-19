import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from 'styles/themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MDXComponents from 'components/MDXComponents';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Globals } from 'styles/themes/globals';
import { MouseMoveHider } from 'components/MouseMoveHider';
import { defaultQueryFn } from '../lib/fetcher';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 24 * 60 * 60 * 1000
    }
  }
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MDXProvider components={MDXComponents}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Globals />
            <Header />
            <Container
              as="main"
              width="full"
              maxWidth="2xl"
              marginX="auto"
              padding={6}
              gridArea="main"
            >
              <Component {...pageProps} />
            </Container>
            <Footer />
            <MouseMoveHider />
          </QueryClientProvider>
        </RecoilRoot>
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;

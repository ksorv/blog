import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from 'styles/themes';
import { QueryClient, QueryClientProvider } from 'react-query';
import MDXComponents from 'components/MDXComponents';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Globals } from 'styles/themes/globals';
import { defaultQueryFn } from '../lib/fetcher';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn
    }
  }
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <ChakraProvider theme={theme} resetCSS>
        <MDXProvider components={MDXComponents}>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
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
            </RecoilRoot>
          </QueryClientProvider>
        </MDXProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;

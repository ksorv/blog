import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from 'styles/themes';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <body className="w-full h-full">
          <Main />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import {
  json,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData
} from 'remix';
import type { LinksFunction } from 'remix';
import { useContext } from 'react';
import tailwindStyles from './styles/tailwindOut.css';
import globalStyles from './styles/global.css';
import { getSession } from './lib/theme';
import { GlobalContext, GlobalStateProvider } from './stores/providers';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: globalStyles },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png'
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'icon', href: '/favicon.ico' },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Nunito300.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Nunito700.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Nunito900.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/NunitoI.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/NunitoR.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    }
    // {
    //   rel: "stylesheet",
    //   href: darkStylesUrl,
    //   media: "(prefers-color-scheme: dark)"
    // }
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const currentTheme = session.get('theme');

  return json({
    theme: currentTheme
  });
};

const Document: React.FC<{ title?: string }> = ({ children, title }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-primary-accent flex flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

const ErrorBoundary: React.FC<{ error: Error }> = ({ error }) => {
  console.error(error);
  return (
    <GlobalStateProvider>
      <Document title="Error!">
        <Layout>
          <div>
            <h1>Error!</h1>
            <p>{error.message}</p>
            <hr />
            <p>Hold my beer... I&apos;m fixin&apos; it.</p>
          </div>
        </Layout>
      </Document>
    </GlobalStateProvider>
  );
};

const CatchBoundary: React.FC = () => {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = <p>Unauthorized</p>;
      break;
    case 404:
      message = <p>Deleted from Existence.</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <GlobalStateProvider>
      <Document title={`${caught.status} ${caught.statusText}`}>
        <Layout>
          <h1>
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </Layout>
      </Document>
    </GlobalStateProvider>
  );
};

const App: React.FC = () => {
  const { theme } = useLoaderData();

  return (
    <GlobalStateProvider theme={theme}>
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </GlobalStateProvider>
  );
};

export default App;
export { CatchBoundary, ErrorBoundary };

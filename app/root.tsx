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
import { Themes, useThemeToggle } from './utils/useThemeToggle';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: globalStyles }
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

  console.log(`\nAPP_ROOT_THEME`, currentTheme, '\n');
  return json({
    theme: currentTheme
  });
};

const Document: React.FC<{ title?: string; theme?: Themes }> = ({
  children,
  title,
  theme: localTheme
}) => {
  const { theme } = useContext(GlobalContext);

  return (
    <html lang="en" className={theme || localTheme}>
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
    <div className="w-screen h-screen bg-primary-accent">
      <Header />
      {children}
    </div>
  );
};

const ErrorBoundary: React.FC<{ error: Error }> = ({ error }) => {
  const { theme } = useThemeToggle();

  return (
    <Document title="Error!" theme={theme}>
      <Layout>
        <div>
          <h1>Error!</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hold my beer... I&apos;m fixin&apos; it.</p>
        </div>
      </Layout>
    </Document>
  );
};

const CatchBoundary: React.FC = () => {
  const { theme } = useThemeToggle();
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
    <Document title={`${caught.status} ${caught.statusText}`} theme={theme}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
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

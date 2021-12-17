import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from 'remix';
import type { LinksFunction } from 'remix';
import tailwindStyles from './styles/tailwind.css';
import globalStyles from './styles/global.css';

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

const Document: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <html lang="en">
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
  return <div className="w-full h-full">{children}</div>;
};

const ErrorBoundary: React.FC<{ error: Error }> = ({ error }) => {
  return (
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
    <Document title={`${caught.status} ${caught.statusText}`}>
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
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

export default App;
export { CatchBoundary, ErrorBoundary };

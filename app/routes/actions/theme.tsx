import { ActionFunction, json, LoaderFunction } from '@remix-run/node';
import { commitSession, getSession } from '~/lib/theme';
import { Themes } from '~/utils/useThemeToggle';

export const loader: LoaderFunction = async () => {
  return {};
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const currentTheme = session.get('theme');
  const newTheme = currentTheme === Themes.light ? Themes.dark : Themes.light;

  session.set('theme', newTheme);
  const cookie = await commitSession(session);

  return json(
    {
      success: true
    },
    {
      headers: { 'Set-Cookie': cookie }
    }
  );
};

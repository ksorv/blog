import { ActionFunction, json, LoaderFunction, redirect } from 'remix';
import { commitSession, getSession } from '~/lib/theme';
import { Themes } from '~/utils/useThemeToggle';

export const loader: LoaderFunction = async () => {
  return redirect('/', {
    status: 303,
    statusText: 'Did not expect you to be here'
  });
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

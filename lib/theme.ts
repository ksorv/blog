import { createCookieSessionStorage } from '@remix-run/node';

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: 'theme',
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 1000,
      sameSite: 'lax',
      path: '/',
      secrets: ['setbysorv'],
      secure: process.env.NODE_ENV === 'production'
    }
  });

export { getSession, commitSession, destroySession };

import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  const { email, id, token } = await req.body;
  const { authorization } = await req.headers;

  if (authorization === 'Bearer 12345') {
    req.session.set('user', {
      email,
      id,
      token,
    });
    await req.session.save();
    res.send('Logged in');
  } else {
    res.send('You are not allowed here');
  }
}

export default withIronSession(handler, {
  password: 'complex_password_at_least_32_characters_long',
  // eslint-disable-next-line no-unneeded-ternary
  secure: process.env.NODE_ENV === 'production' ? true : false,
  cookieName: 'nave',
});

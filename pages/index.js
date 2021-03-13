import React from 'react';
// import styled from 'styled-components';
import { withIronSession } from 'next-iron-session';
import { Box } from '../src/components/foundation/layout/Box';
import FormLogin from '../src/components/foundation/patterns/FormLogin';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      width="100%"
      height="100%"
    >
      <FormLogin />
    </Box>
  );
}

export const getServerSideProps = withIronSession(
  // eslint-disable-next-line no-unused-vars
  async ({ req, res }) => {
    const user = req.session.get('user');
    if (user) {
      return {
        redirect: {
          destination: '/navers',
          permanent: false,
        },
      };
    }
    return {
      props: { },
    };
  },
  {
    cookieName: 'nave',
    cookieOptions: {
      // eslint-disable-next-line no-unneeded-ternary
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
    password: 'complex_password_at_least_32_characters_long',
  },
);

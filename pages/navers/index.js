/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { withIronSession } from 'next-iron-session';
import { Box } from '../../src/components/foundation/layout/Box';
import NavBar from '../../src/components/commons/NavBar';
import Naver from '../../src/components/commons/Naver';
import NaversBar from '../../src/components/commons/NaversBar';

export default function NaversPage(props) {
  return (
    // <div>
    //   {props.user.id}
    //   {props.user.email}
    //   {props.user.token}
    //   {' '}
    //   {props.navers[0].name}
    //   {' '}
    //   {props.navers[1].name}
    // </div>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      width="100%"
      height="100%"
    >
      <NavBar />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        backgroundColor="white"
        width="100%"
        height="100%"
        margin="20px"
      >
        <NaversBar />
        {props.navers && props.navers.map((naver) => (
          <Naver imgSrc={naver.url} naverName={naver.name} jobRole={naver.job_role} />
        ))}
        ,
      </Box>
    </Box>
  );
}

export const getServerSideProps = withIronSession(
  // eslint-disable-next-line no-unused-vars
  async ({ req, res }) => {
    const user = req.session.get('user');
    let navers;
    if (user) {
      navers = await fetch('https://navedex-api.herokuapp.com/v1/navers',
        {
          method: 'GET',
          headers: {
          // 'User-Agent': 'PostmanRuntime/7.26.10',
          // Accept: '*/*',
          // 'Accept-Encoding': 'gzip, deflate, br',
          // Connection: 'keep-alive',
            Authorization: `Bearer ${user.token}`,
          },
          // eslint-disable-next-line arrow-body-style
        }).then(async (resp) => {
        const response = await resp.json();
        // ATENçâo ---- LEMBRE DE TIRAR O DATA
        // console.log(response);
        return response;
      });
    }
    // const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (resp) => {
    //   const response = await resp.json();
    //   // ATENçâo ---- LEMBRE DE TIRAR O DATA
    //   return response.data;
    // });
    // eslint-disable-next-line no-console
    // console.log(user);
    if (!user) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: { user, navers },
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

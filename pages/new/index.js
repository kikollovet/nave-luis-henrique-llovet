/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import { withIronSession } from 'next-iron-session';
// import styled from 'styled-components';
import { Box } from '../../src/components/foundation/layout/Box';
import FormNaver from '../../src/components/foundation/patterns/FormNaver';
import Modal from '../../src/components/commons/Modal';
import SuccessWindow from '../../src/components/commons/SuccessWindow';

export default function Home(props) {
  const [isModalOpen, setModalState] = React.useState(false);
  const router = useRouter();
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
          router.push('/navers');
        }}
      >
        {(propsDoModal) => (
          <SuccessWindow
            largeText="Naver criado"
            smallText="Naver criado com sucesso!"
            onClose={() => {
              setModalState(false);
              router.push('/navers');
            }}
            propsDoModal={propsDoModal}
          />
        )}
      </Modal>
      <FormNaver
        success={() => {
          setModalState(true);
        }}
        token={props.user.token}
      />
    </Box>
  );
}

export const getServerSideProps = withIronSession(
  // eslint-disable-next-line no-unused-vars
  async ({ req, res }) => {
    const user = req.session.get('user');
    // let navers;
    // if (user) {
    //   navers = await fetch('https://navedex-api.herokuapp.com/v1/navers',
    //     {
    //       method: 'GET',
    //       headers: {
    //       // 'User-Agent': 'PostmanRuntime/7.26.10',
    //       // Accept: '*/*',
    //       // 'Accept-Encoding': 'gzip, deflate, br',
    //       // Connection: 'keep-alive',
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //       // eslint-disable-next-line arrow-body-style
    //     }).then(async (resp) => {
    //     const response = await resp.json();
    //     // ATENçâo ---- LEMBRE DE TIRAR O DATA
    //     // console.log(response);
    //     return response;
    //   });
    // }
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
      props: { user },
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

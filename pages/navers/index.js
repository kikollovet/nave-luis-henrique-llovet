/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { withIronSession } from 'next-iron-session';
import { Box } from '../../src/components/foundation/layout/Box';
import NavBar from '../../src/components/commons/NavBar';
import Naver from '../../src/components/commons/Naver';
import NaversBar from '../../src/components/commons/NaversBar';
import Modal from '../../src/components/commons/Modal';
import NaversDetail from '../../src/components/commons/NaversDetail';

export default function NaversPage(props) {
  const [isModalOpen, setModalState] = React.useState(false);
  const [dataModalDetail, setDataModalDetail] = React.useState({});
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <NaversDetail
            onClose={() => {
              setModalState(false);
            }}
            imgSrc={dataModalDetail.imgSrc}
            naverName={dataModalDetail.naverName}
            jobRole={dataModalDetail.jobRole}
            birthdate={dataModalDetail.birthdate}
            admissionDate={dataModalDetail.admissionDate}
            project={dataModalDetail.project}
            propsDoModal={propsDoModal}
          />
        )}
      </Modal>
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
          <Naver
            key={naver.url}
            imgSrc={naver.url}
            naverName={naver.name}
            jobRole={naver.job_role}
            onClick={() => {
              setDataModalDetail({
                id: naver.id,
                imgSrc: naver.url,
                naverName: naver.name,
                jobRole: naver.job_role,
                birthdate: naver.birthdate.split('T', 1),
                admissionDate: naver.admission_date.split('T', 1),
                project: naver.project,
              });
              setModalState(!isModalOpen);
            }}
          />
        ))}
        ,
        {/* {props.navers && props.navers.map((naver) => (
          <NaversDetail
            imgSrc={naver.url}
            naverName={naver.name}
            jobRole={naver.job_role}
            birthdate={naver.birthdate}
            admissionDate={naver.admission_date}
            project={naver.project}
          />
        ))}
        , */}
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

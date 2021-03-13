import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Box } from '../../layout/Box';
import { Button } from '../../../commons/Button';
import InputGroup from '../../../commons/InputGroup';

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    password: '',
  });

  const [errorLogin, setErrorLogin] = React.useState();
  const [processingLogin, setProcessingLogin] = React.useState();

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const router = useRouter();
  return (
    <>
      <img style={{ alignSelf: 'center', marginBottom: '30px' }} src="logo.png" width="235px" height="60px" alt="logo" />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          // Data Transfer Object
          setProcessingLogin('Processing.......');
          const userDTO = {
            email: userInfo.email,
            password: userInfo.password,
          };

          fetch('https://navedex-api.herokuapp.com/v1/users/login',
            {
              method: 'POST',
              headers: {
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                'Content-Type': 'application/json',
                // Authorization: 'Bearer 12345',
              },
              body: JSON.stringify(userDTO),
            })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }

              throw new Error('Não foi possível cadastrar o usuário agora :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              // console.log(respostaConvertidaEmObjeto);
              fetch('/api/login',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer 12345',
                  },
                  body: JSON.stringify({
                    email: respostaConvertidaEmObjeto.email,
                    id: respostaConvertidaEmObjeto.id,
                    token: respostaConvertidaEmObjeto.token,
                  }),
                })
                .then(() => {
                  router.push('/navers?name=luis');
                });
            })
            .catch(() => {
              setErrorLogin('Ocorreu um problema');
              setProcessingLogin();
              setTimeout(() => {
                setErrorLogin();
              }, 5000);
            });
        }}
      >
        <InputGroup
          label="E-mail"
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={userInfo.email}
        />
        <InputGroup
          label="Senha"
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
          value={userInfo.password}
        />
        {errorLogin}
        {processingLogin}
        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
}

export default function FormLogin() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="a"
      alignItems="flex-start"
      alignSelf="center"
      backgroundColor="white"
      width="448px"
      height="408px"
      border="1px solid #212121"
      paddingTop="40px"
      paddingBottom="40px"
      paddingRight="32px"
      paddingLeft="32px"
    >
      <FormContent style={{ width: '100%', height: '100%' }} />
    </Box>
  );
}

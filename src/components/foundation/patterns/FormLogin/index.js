import React from 'react';
import styled from 'styled-components';
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
  return (
    <>
      <img style={{ alignSelf: 'center', marginBottom: '30px' }} src="logo.png" width="235px" height="60px" alt="logo" />
      <Form>
        <InputGroup
          label="E-mail"
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={null}
          value=""
        />
        <InputGroup
          label="Senha"
          type="password"
          name="password"
          placeholder="Senha"
          onChange={null}
          value=""
        />
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

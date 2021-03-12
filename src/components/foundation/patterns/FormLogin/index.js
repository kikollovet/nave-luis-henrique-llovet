import React from 'react';
import styled from 'styled-components';
import { Box } from '../../layout/Box';
import { Button } from '../../../commons/Button';
import { LabelInput } from '../../../commons/LabelInput';
import { InputText } from '../../../commons/InputText';

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function FormContent() {
  return (
    <>
      <img style={{ alignSelf: 'center', marginBottom: '30px' }} src="logo.png" width="235px" height="60px" alt="logo" />
      <Form>
        <InputGroup>
          <LabelInput>E-mail</LabelInput>
          <InputText type="text" id="Email" name="email" placeholder="E-mail" />
        </InputGroup>
        <InputGroup>
          <LabelInput>Senha</LabelInput>
          <InputText type="password" id="Password" name="password" placeholder="Senha" />
        </InputGroup>

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
      {/* <h1>teste</h1>
      <input style={{ width: '100%' }} type="text" placeholder="teste"/>
      <h1>teste</h1> */}
      <FormContent style={{ width: '100%', height: '100%' }} />
    </Box>
  );
}

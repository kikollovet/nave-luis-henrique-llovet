import React from 'react';
import styled from 'styled-components';
// import { useRouter } from 'next/router';
import { Box } from '../../layout/Box';
import { Button } from '../../../commons/Button';
import InputGroup from '../../../commons/InputGroup';

const InputGroup2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledInputGroup = styled.div`
  margin: 10px;
`;

const ButtonForm = styled(Button)`
  margin: 10px;
  width: 176px;
`;

function FormContent() {
  return (
    <form>
      <InputGroup2>
        <StyledInputGroup>
          <InputGroup
            label="Nome"
            type="text"
            name="email"
            placeholder="E-mail"
            onChange=""
            value=""
            width="280px"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup
            label="Senha"
            type="password"
            name="password"
            placeholder="Senha"
            onChange=""
            value=""
            width="280px"
          />
        </StyledInputGroup>
      </InputGroup2>
      <InputGroup2>
        <StyledInputGroup>
          <InputGroup
            label="E-mail"
            type="text"
            name="email"
            placeholder="E-mail"
            onChange=""
            value=""
            width="280px"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup
            label="Senha"
            type="password"
            name="password"
            placeholder="Senha"
            onChange=""
            value=""
            width="280px"
          />
        </StyledInputGroup>
      </InputGroup2>
      <InputGroup2>
        <StyledInputGroup>
          <InputGroup
            label="E-mail"
            type="text"
            name="email"
            placeholder="E-mail"
            onChange=""
            value=""
            width="280px"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup
            label="Senha"
            type="password"
            name="password"
            placeholder="Senha"
            onChange=""
            value=""
            width="280px"
          />
        </StyledInputGroup>
      </InputGroup2>
      <ButtonWrap>
        <ButtonForm type="submit">Entrar</ButtonForm>
      </ButtonWrap>
    </form>
  );
}

export default function FormNaver() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      // justifyContent="a"
      alignItems="flex-start"
      alignSelf="center"
      backgroundColor="white"
      width="700px"
      height="408px"
      paddingTop="40px"
      paddingBottom="40px"
      paddingRight="32px"
      paddingLeft="32px"
    >
      <FormContent style={{ width: '100%', height: '100%' }} />
    </Box>
  );
}

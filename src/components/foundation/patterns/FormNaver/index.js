/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../layout/Box';
import InputGroup from '../../../commons/InputGroup';
import NavBar from '../../../commons/NavBar';
import {
  InputGroup2,
  ButtonWrap,
  StyledInputGroup,
  ButtonForm,
  Wrapper,
  WrapperTitle,
  BackButton,
  Text,
} from './styles';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line camelcase
function FormContent({
  token, success,
}) {
  const [naverInfo, setNaverInfo] = React.useState({
    name: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
    url: '',
  });
  const [processando, setProcessando] = React.useState('');
  const [erro, setErro] = React.useState('');

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setNaverInfo({
      ...naverInfo,
      [fieldName]: event.target.value,
    });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setErro('');
        setProcessando('Processando.......');
        const naverDTO = {
          job_role: naverInfo.job_role,
          admission_date: naverInfo.admission_date,
          project: naverInfo.project,
          name: naverInfo.name,
          url: naverInfo.url,
          birthdate: naverInfo.birthdate,
        };

        fetch('https://navedex-api.herokuapp.com/v1/navers',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(naverDTO),
          })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          // eslint-disable-next-line no-unused-vars
          .then((respostaConvertidaEmObjeto) => {
            success();
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            setProcessando('');
            setErro('Algo deu errado');
          });
      }}
    >
      <InputGroup2>
        <StyledInputGroup>
          <InputGroup
            label="Nome"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleChange}
            value={naverInfo.name}
            width="280px"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup
            label="Cargo"
            type="text"
            name="job_role"
            placeholder="Cargo"
            onChange={handleChange}
            value={naverInfo.job_role}
            width="280px"
          />
        </StyledInputGroup>
      </InputGroup2>
      <InputGroup2>
        <StyledInputGroup>
          <InputGroup
            label="Idade"
            type="text"
            name="birthdate"
            placeholder="DD/MM/AAAA"
            onChange={handleChange}
            value={naverInfo.birthdate}
            width="280px"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup
            label="Tempo de empresa"
            type="text"
            name="admission_date"
            placeholder="DD/MM/AAAA"
            onChange={handleChange}
            value={naverInfo.admission_date}
            width="280px"
          />
        </StyledInputGroup>
      </InputGroup2>
      <InputGroup2>
        <StyledInputGroup>
          <InputGroup
            label="Projetos que participou"
            type="text"
            name="project"
            placeholder="Projetos que participou"
            onChange={handleChange}
            value={naverInfo.project}
            width="280px"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup
            label="URL da foto do naver"
            type="text"
            name="url"
            placeholder="URL da foto do naver"
            onChange={handleChange}
            value={naverInfo.url}
            width="280px"
          />
        </StyledInputGroup>
      </InputGroup2>
      {processando}
      {erro}
      <ButtonWrap>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </ButtonWrap>
    </form>
  );
}

export default function FormNaver({
  token, success,
}) {
  return (
    <Wrapper>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
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
        <WrapperTitle>
          <BackButton
            href="/navers"
          >
            <img src="/arrow.png" width="12px" height="20px" alt="close icon" />
          </BackButton>
          <Text>Adicionar Naver</Text>
        </WrapperTitle>
        <FormContent
          token={token}
          style={{ width: '100%', height: '100%' }}
          success={success}
        />
      </Box>
    </Wrapper>
  );
}

FormContent.defaultProps = {
  success: () => {},
};

FormContent.propTypes = {
  token: PropTypes.string.isRequired,
  success: PropTypes.func,
};

FormNaver.defaultProps = {
  success: () => {},
};

FormNaver.propTypes = {
  token: PropTypes.string.isRequired,
  success: PropTypes.func,
};

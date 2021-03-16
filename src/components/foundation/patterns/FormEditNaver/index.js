/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../../layout/Box';
import { Button } from '../../../commons/Button';
import InputGroup from '../../../commons/InputGroup';
import NavBar from '../../../commons/NavBar';

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

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line camelcase
function FormContent({
  token, name, job_role, birthdate, admission_date, project, url, id, success,
}) {
  const [naverInfo, setNaverInfo] = React.useState({
    name,
    job_role,
    birthdate,
    admission_date,
    project,
    url,
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

        fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`,
          {
            method: 'PUT',
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const BackButton = styled.a`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  align-self: flex-end;
  padding: 10px;
`;

const Text = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-left: 20px;
`;
export default function FormEditNaver({
  token, name, job_role, birthdate, admission_date, project, url, id, success,
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
          <Text>Editar Naver</Text>
        </WrapperTitle>
        <FormContent
          token={token}
          name={name}
          job_role={job_role}
          birthdate={birthdate}
          admission_date={admission_date}
          project={project}
          url={url}
          id={id}
          success={success}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
    </Wrapper>
  );
}

FormContent.defaultProps = {
  id: '',
  name: '',
  job_role: '',
  birthdate: '',
  admission_date: '',
  project: '',
  url: '',
  success: () => {},
};

FormContent.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  job_role: PropTypes.string,
  birthdate: PropTypes.string,
  admission_date: PropTypes.string,
  project: PropTypes.string,
  url: PropTypes.string,
  success: PropTypes.func,
};

FormEditNaver.defaultProps = {
  id: '',
  name: '',
  job_role: '',
  birthdate: '',
  admission_date: '',
  project: '',
  url: '',
  success: () => {},
};

FormEditNaver.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  job_role: PropTypes.string,
  birthdate: PropTypes.string,
  admission_date: PropTypes.string,
  project: PropTypes.string,
  url: PropTypes.string,
  success: PropTypes.func,
};

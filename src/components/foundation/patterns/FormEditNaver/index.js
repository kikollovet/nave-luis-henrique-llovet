/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
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

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line camelcase
function FormContent({
  token, name, job_role, birthdate, admission_date, project, url, id
}) {
  const [naverInfo, setNaverInfo] = React.useState({
    name,
    job_role,
    birthdate,
    admission_date,
    project,
    url,
  });

  // const [errorLogin, setErrorLogin] = React.useState();
  // const [processingLogin, setProcessingLogin] = React.useState();

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
        // Data Transfer Object
        // setProcessingLogin('Processing.......');
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
              // Accept: '*/*',
              // 'Accept-Encoding': 'gzip, deflate, br',
              // Connection: 'keep-alive',
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
            // console.log(respostaConvertidaEmObjeto);
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            // console.log(error);
            // console.log(token);
            // console.log(naverDTO);
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
      <ButtonWrap>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </ButtonWrap>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormEditNaver({
  token, name, job_role, birthdate, admission_date, project, url, id
}) {
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
      <FormContent
        token={token}
        name={name}
        job_role={job_role}
        birthdate={birthdate}
        admission_date={admission_date}
        project={project}
        url={url}
        id={id}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
}

FormContent.defaultProps = {
  name: '',
  job_role: '',
  birthdate: '',
  admission_date: '',
  project: '',
  url: '',
};

FormContent.propTypes = {
  token: PropTypes.string.isRequired,
  name: PropTypes.string,
  job_role: PropTypes.string,
  birthdate: PropTypes.string,
  admission_date: PropTypes.string,
  project: PropTypes.string,
  url: PropTypes.string,
};

FormEditNaver.defaultProps = {
  name: '',
  job_role: '',
  birthdate: '',
  admission_date: '',
  project: '',
  url: '',
};

FormEditNaver.propTypes = {
  token: PropTypes.string.isRequired,
  name: PropTypes.string,
  job_role: PropTypes.string,
  birthdate: PropTypes.string,
  admission_date: PropTypes.string,
  project: PropTypes.string,
  url: PropTypes.string,
};

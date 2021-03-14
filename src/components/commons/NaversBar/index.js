/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button } from '../Button';

const NaversBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* padding: 30px; */
`;

// const SairButton = styled.button`
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 24px;
//   border: 0px;
//   background-color: white;
//   outline: none;
// `;

const NaversText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 30px;
`;

const NaversButton = styled(Button)`
  width: 176px;
  margin: 30px;
`;

export default function NaversBar() {
  const router = useRouter();
  return (
    <NaversBarWrapper>
      <NaversText>Navers</NaversText>
      <NaversButton
        type="button"
        onClick={() => {
          router.push('/new');
        }}
      >
        Adicionar Naver
      </NaversButton>
    </NaversBarWrapper>
  );
}

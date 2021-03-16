/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
`;

const SairButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  cursor: pointer;
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <NavBarWrapper>
      <img src="/logo.png" width="145px" height="37px" alt="logo" />
      <SairButton
        type="button"
        onClick={() => {
          fetch('/api/logout', { method: 'POST' }).then(() => {
            router.push('/navers');
          });
        }}
      >
        Sair
      </SairButton>
    </NavBarWrapper>
  );
}

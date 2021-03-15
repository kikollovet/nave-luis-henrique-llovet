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
  background-color: white;
  outline: none;
  cursor: pointer;
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <NavBarWrapper>
      <img src="/logo.png" width="145px" height="37px" alt="logo" />
      <SairButton
        type="submit"
        onClick={() => {
          fetch('/api/logout', { method: 'POST' });
          router.push('/');
        }}
      >
        Sair
      </SairButton>
    </NavBarWrapper>
  );
}

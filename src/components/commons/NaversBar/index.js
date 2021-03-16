/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button } from '../Button';
import { TextStyleVariantsMap } from '../../foundation/Text';

const NaversBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const NaversText = styled.span`
  ${TextStyleVariantsMap.navBarTitle}
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

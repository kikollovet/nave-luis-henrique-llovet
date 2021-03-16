/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const InputText = styled.input`
height: 40px;
padding: 8px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
&:-webkit-autofill{
  box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.main};
  -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.main} inset !important;
}
`;

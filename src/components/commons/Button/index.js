/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.main};
  height: 40px;
  border: 0px;
  cursor: pointer;
`;

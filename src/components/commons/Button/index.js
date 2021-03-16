/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  ${TextStyleVariantsMap.button}
  color: ${({ theme }) => theme.colors.main};
  height: 40px;
  border: 0px;
  cursor: pointer;
`;

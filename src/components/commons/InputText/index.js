/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const InputText = styled.input`
height: 40px;
padding: 8px;
${TextStyleVariantsMap.input}
&:-webkit-autofill{
  box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.main};
  -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.main} inset !important;
}
`;

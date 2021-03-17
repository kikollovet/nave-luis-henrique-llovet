import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const NaverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 281px;
  height: 420px;
  margin: 20px;
`;

export const NaverName = styled.span`
  ${TextStyleVariantsMap.titleCard}
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const NaverJob = styled.span`
  ${TextStyleVariantsMap.subTitleCard}
`;

export const ButtonsWrapper = styled.div`
  margin-top: 12px;
`;

export const Button = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  cursor: pointer;
`;

export const Clicavel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

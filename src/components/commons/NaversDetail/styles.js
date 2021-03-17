import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const NaverWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1006px;
  height: 503px;
`;

export const NaverData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 503px;
  height: 503px;
  background-color: ${({ theme }) => theme.colors.main};
  padding-left: 25px;
`;

export const NaverName = styled.span`
  ${TextStyleVariantsMap.titleDetailCard}
`;

export const NaverJob = styled.span`
  ${TextStyleVariantsMap.subTitleDetailCard}
`;

export const NaverInfoTitle = styled.span`
  ${TextStyleVariantsMap.naverInfoTitleDetailCard}
`;

export const NaverInfo = styled.span`
  ${TextStyleVariantsMap.naverInfoDetailCard}
`;

export const ButtonsWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
`;

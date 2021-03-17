import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

export const WrapperSuccessWindow = styled.div`
  width: 592px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const LargeText = styled.span`
  ${TextStyleVariantsMap.modalTitle}
  margin-left: 32px;
`;

export const SmallText = styled.span`
  ${TextStyleVariantsMap.modalsubTitle}
  margin-bottom: 20px;
  margin-left: 32px;
`;

export const CloseButton = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
`;

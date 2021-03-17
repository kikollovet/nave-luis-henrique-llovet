/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { Button } from '../Button';

export const WrapperDeleteWindow = styled.div`
  width: 592px;
  height: 233px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

export const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 176px;
  height: 40px;
  margin-right: 24px;
  margin-bottom: 32px;
`;

export const ConfirmButton = styled(Button)`
  width: 176px;
  height: 40px;
  margin-right: 24px;
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
`;

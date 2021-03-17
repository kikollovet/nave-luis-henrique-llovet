import styled from 'styled-components';
import { Button } from '../../../commons/Button';
import { TextStyleVariantsMap } from '../../Text';

export const InputGroup2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin-bottom: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledInputGroup = styled.div`
  margin: 10px;
`;

export const ButtonForm = styled(Button)`
  margin: 10px;
  width: 176px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BackButton = styled.a`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  align-self: flex-end;
  padding: 10px;
`;

export const Text = styled.span`
  ${TextStyleVariantsMap.formTitle}
  margin-left: 20px;
`;

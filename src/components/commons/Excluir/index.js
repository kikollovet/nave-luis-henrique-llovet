/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../../foundation/layout/Box';
import { Button } from '../Button';
import { TextStyleVariantsMap } from '../../foundation/Text';

const WrapperDeleteWindow = styled.div`
  width: 592px;
  height: 233px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.main};
`;

const LargeText = styled.span`
  ${TextStyleVariantsMap.modalTitle}
  margin-left: 32px;
`;

const SmallText = styled.span`
  ${TextStyleVariantsMap.modalsubTitle}
  margin-bottom: 20px;
  margin-left: 32px;
`;

const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 176px;
  height: 40px;
  margin-right: 24px;
  margin-bottom: 32px;
`;

const ConfirmButton = styled(Button)`
  width: 176px;
  height: 40px;
  margin-right: 24px;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
`;

export default function Excluir({
  // eslint-disable-next-line react/prop-types
  propsDoModal, largeText, smallText, onClose, onConfirm,
}) {
  return (
    <Box {...propsDoModal}>
      <WrapperDeleteWindow>
        <LargeText>{largeText}</LargeText>
        <SmallText>{smallText}</SmallText>

        <ButtonWrapper>
          <CancelButton
            type="button"
            // eslint-disable-next-line no-unused-vars
            onClick={(event) => {
              onClose();
            }}
          >
            Cancelar
          </CancelButton>
          <ConfirmButton
            type="button"
            // eslint-disable-next-line no-unused-vars
            onClick={(event) => {
              onConfirm();
            }}
          >
            Excluir
          </ConfirmButton>
        </ButtonWrapper>
      </WrapperDeleteWindow>
    </Box>
  );
}

Excluir.propTypes = {
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

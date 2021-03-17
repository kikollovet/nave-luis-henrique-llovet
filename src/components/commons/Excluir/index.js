/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import {
  WrapperDeleteWindow, LargeText, SmallText, CancelButton, ConfirmButton, ButtonWrapper,
} from './styles';

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

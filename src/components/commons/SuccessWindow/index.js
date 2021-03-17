/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import {
  WrapperSuccessWindow, LargeText, SmallText, CloseButton,
} from './styles';

export default function SuccessWindow({
  propsDoModal, largeText, smallText, onClose,
}) {
  return (
    <Box {...propsDoModal}>
      <WrapperSuccessWindow>
        <CloseButton
          type="button"
            // eslint-disable-next-line no-unused-vars
          onClick={(event) => {
            onClose();
          }}
        >
          <img src="/closeIcon.png" width="14px" height="14px" alt="close icon" />
        </CloseButton>
        <LargeText>{largeText}</LargeText>
        <SmallText>{smallText}</SmallText>
      </WrapperSuccessWindow>
    </Box>
  );
}

SuccessWindow.propTypes = {
  largeText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

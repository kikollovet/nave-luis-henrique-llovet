/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../../foundation/layout/Box';

const WrapperSuccessWindow = styled.div`
  width: 592px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.main};
`;

const LargeText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-left: 32px;
`;

const SmallText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;
  margin-bottom: 20px;
  margin-left: 32px;
`;

const CloseButton = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
`;

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

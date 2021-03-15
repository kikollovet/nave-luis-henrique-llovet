/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../../foundation/layout/Box';

const NaverWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1006px;
  height: 503px;
`;

const NaverData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 503px;
  height: 503px;
  background-color: white;
  padding-left: 25px;
`;

const NaverName = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

const NaverJob = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const NaverInfoTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const NaverInfo = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 12px;
`;

const Button = styled.button`
  border: 0px;
  background-color: white;
  outline: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  border: 0px;
  background-color: white;
  outline: none;
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
export default function NaversDetail({
  // eslint-disable-next-line react/prop-types
  imgSrc, naverName, jobRole, birthdate, admissionDate, project, propsDoModal, onClose, editClick, trashClick,
}) {
  return (
    <Box {...propsDoModal}>
      <NaverWrapper>
        <img src={imgSrc} width="503px" height="503px" alt="naver" />
        <NaverData>
          <CloseButton
            type="button"
            // eslint-disable-next-line no-unused-vars
            onClick={(event) => {
              onClose();
            }}
          >
            <img src="/closeIcon.png" width="14px" height="14px" alt="close icon" />
          </CloseButton>
          <NaverName>{naverName}</NaverName>
          <NaverJob>{jobRole}</NaverJob>
          <NaverInfoTitle>Idade</NaverInfoTitle>
          <NaverInfo>{birthdate}</NaverInfo>
          <NaverInfoTitle>Tempo de empresa</NaverInfoTitle>
          <NaverInfo>{admissionDate}</NaverInfo>
          <NaverInfoTitle>Projetos que participou</NaverInfoTitle>
          <NaverInfo>{project}</NaverInfo>
          <ButtonsWrapper>
            <Button
              type="button"
              onClick={trashClick}
            >
              <img src="/trashIcon.png" width="14px" height="18px" alt="trashIcon" />
            </Button>
            <Button
              type="button"
              onClick={editClick}
            >
              <img src="/editIcon.png" width="18px" height="18px" alt="editIcon" />
            </Button>
          </ButtonsWrapper>
        </NaverData>
      </NaverWrapper>
    </Box>
  );
}

NaversDetail.defaultProps = {
  imgSrc: '',
  naverName: '',
  jobRole: '',
  birthdate: '',
  admissionDate: '',
  project: '',
};

NaversDetail.propTypes = {
  imgSrc: PropTypes.string,
  naverName: PropTypes.string,
  jobRole: PropTypes.string,
  birthdate: PropTypes.string,
  admissionDate: PropTypes.string,
  project: PropTypes.string,
};

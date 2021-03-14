/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NaverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 281px;
  height: 420px;
  margin: 20px;
`;

// const SairButton = styled.button`
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 24px;
//   border: none;
//   background-color: white;
// `;

const NaverName = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin-top: 20px;
`;

const NaverJob = styled.span`
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
`;

// eslint-disable-next-line react/prop-types
export default function NavBar({
  // eslint-disable-next-line react/prop-types
  imgSrc, naverName, jobRole, onClick, editClick,
}) {
  return (
    <NaverWrapper>
      <img onClick={onClick} src={imgSrc} width="281px" height="280px" alt="naver" />
      <NaverName>{naverName}</NaverName>
      <NaverJob>{jobRole}</NaverJob>
      <ButtonsWrapper>
        <Button
          type="button"
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
    </NaverWrapper>
  );
}

NavBar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  naverName: PropTypes.string.isRequired,
  jobRole: PropTypes.string.isRequired,
};

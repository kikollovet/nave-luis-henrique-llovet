/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

const NaverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 281px;
  height: 420px;
  margin: 20px;
`;

const NaverName = styled.span`
  ${TextStyleVariantsMap.titleCard}
  margin-top: 20px;
  margin-bottom: 5px;
`;

const NaverJob = styled.span`
  ${TextStyleVariantsMap.subTitleCard}
`;

const ButtonsWrapper = styled.div`
  margin-top: 12px;
`;

const Button = styled.button`
  border: 0px;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  cursor: pointer;
`;

const Clicavel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// eslint-disable-next-line react/prop-types
export default function Naver({
  // eslint-disable-next-line react/prop-types
  imgSrc, naverName, jobRole, onClick, editClick, trashClick,
}) {
  return (
    <NaverWrapper>
      <Clicavel onClick={onClick}>
        <img src={imgSrc} width="281px" height="280px" alt="naver" />
        <NaverName>{naverName}</NaverName>
        <NaverJob>{jobRole}</NaverJob>
      </Clicavel>
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
    </NaverWrapper>
  );
}

Naver.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  naverName: PropTypes.string.isRequired,
  jobRole: PropTypes.string.isRequired,
};

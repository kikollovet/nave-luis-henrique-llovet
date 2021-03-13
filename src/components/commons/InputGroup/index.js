/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InputText } from '../InputText';
import { LabelInput } from '../LabelInput';

const InputGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function InputGroup({
  label, type, name, placeholder, onChange, value, width,
}) {
  return (
    <InputGroupDiv>
      <LabelInput>{label}</LabelInput>
      <InputText
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{ width }}
      />
    </InputGroupDiv>
  );
}

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  width: PropTypes.string,
};

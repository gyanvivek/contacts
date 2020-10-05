import React from 'react';

import './styles.css';

export type InputProps = {
  placeholer: string;
  onChange: Function;
};

const TextInput = ({ placeholer, onChange }: InputProps) => {
  return (
    <input
      type="text"
      className="textinput"
      placeholder={placeholer}
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  );
};

export default TextInput;

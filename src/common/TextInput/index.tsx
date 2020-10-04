import React from 'react';

import './styles.css';

export type InputProps = {
  placeholer: string;
};

const TextInput = ({ placeholer }: InputProps) => {
  return <input type="text" className="textinput" placeholder={placeholer} />;
};

export default TextInput;

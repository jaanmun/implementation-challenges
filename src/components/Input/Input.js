import React from 'react';
import './Input.scss';

const Input = ({ label, id, type, inputMode, placeholder, name, onChange, onKeyDown, value, errorText, ...rest }) => {
  return (
    <div>
      {label && (
        <div className="label">
          <label htmlFor={id}>{label}</label>
          {rest.required && <span className="require">*</span>}
        </div>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          className="form-input"
          name={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          {...rest}
        />
      </div>

      {<div className="validationMessage">{errorText}</div>}
    </div>
  );
};

export default Input;

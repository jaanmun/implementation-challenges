import React from 'react';
import './Form.scss';

const Form = ({ children, onSubmit }) => {
  return (
    <form noValidate className="form" onSubmit={onSubmit}>
      <div className="form-wrapper">{children}</div>
    </form>
  );
};

export default Form;

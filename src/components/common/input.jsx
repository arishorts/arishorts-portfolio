import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        style={{
          backgroundColor: "var(--color-desert-brown)",
          border: "3px solid var(--color-turquoise-blue)",
          color: "var(--color-sand)",
        }}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        // style={{ WebkitBoxShadow: "0 0 0 1000px red inset" }}
        {...rest}
        name={name}
        id={name}
        className="form-control rounded-4"
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default Input;

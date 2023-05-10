import React from "react";

const TextField = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        {...rest}
        name={name}
        id={name}
        className="form-control"
        rows="7"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextField;

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
        className="form-control rounded-4"
        style={{
          // backgroundColor: "var(--color-sunset-purple)",
          border: "3px solid var(--color-turquoise-blue)",
          color: "var(--color-sand)",
        }}
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default Input;

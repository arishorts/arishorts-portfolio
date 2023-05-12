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
        style={{
          backgroundColor: "var(--color-sunset-purple)",
          border: "3px solid var(--color-turquoise-blue)",
          color: "var(--color-sand)",
        }}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextField;

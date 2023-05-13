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
        className="form-control rounded-4"
        rows="7"
        style={{
          border: "3px solid var(--color-turquoise-blue)",
          color: "var(--color-sand)",
        }}
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default TextField;

import React from "react";

const Select = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="input-group mb-3">
        <select
          name={name}
          id={name}
          {...rest}
          className="form-select rounded-4"
          style={{
            border: "3px solid var(--color-turquoise-blue)",
            color: "var(--color-sand)",
          }}
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
};

export default Select;

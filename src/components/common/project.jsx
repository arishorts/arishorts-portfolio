import React from "react";

const Project = ({ name, summary, date }) => {
  return (
    <div className="card-content card-container">
      <div className="card-content">
        <div className="year">{date}</div>
        <h3>{name}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Project;

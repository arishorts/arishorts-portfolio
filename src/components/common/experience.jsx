import React from "react";
import { BiCalendar } from "react-icons/bi";

const Experience = ({ name, summary, date }) => {
  return (
    <div className="card-content card-container">
      <div className="card-content">
        <div className="card-year">
          <BiCalendar /> {date}
        </div>
        <h3>{name}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Experience;

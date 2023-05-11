import React from "react";
import { BiCalendar } from "react-icons/bi";

const ExperienceCard = ({ name, summary, date }) => {
  return (
    <div className="card-content">
      <div className="content">
        <div className="year">
          <BiCalendar /> {date}
        </div>
        <h3>{name}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

import React from "react";
import { BiCalendar } from "react-icons/bi";

const ResumeCard = ({ name, summary, date, index }) => {
  return (
    <div className="my-2 resume-card rounded-4 p-0" key={index}>
      <div className="resumecard-content px-2">
        <div className="resumecard-year my-2">
          <BiCalendar /> {date}
        </div>
        <h3>{name}</h3>
        <p className="resumecard-summary">{summary}</p>
      </div>
    </div>
  );
};

export default ResumeCard;

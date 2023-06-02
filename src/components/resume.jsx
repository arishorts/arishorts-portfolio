import ResumeCard from "./common/resumecard";
import React, { Component } from "react";
import DownloadLink from "./common/download";

class Resume extends Component {
  state = {
    resume: process.env.PUBLIC_URL + "/Ariel_Schwartz_Resume.pdf",
    experience: [
      {
        date: "October 2019 – present",
        name: "Raytheon Technologies",
        summary:
          "Engineer at missile contractor on multiple weapon system programs for government customer.",
      },
      {
        date: "January 2019 – August 2019",
        name: "Watts Water Technologies",
        summary:
          "Engineer at valve manufacture company within plumbing industry selling commercially.",
      },
      {
        date: "July 2017 – January 2019",
        name: "Global Retool Group",
        summary:
          "Engineer at automated machinery developer selling custom equipment to automotive manufacturers.",
      },
      {
        date: "April 2016 – July 2017",
        name: "SMW Manufacturing",
        summary:
          "Engineer at cold-forming factory that sells car parts to automotive suppliers.",
      },
    ],
    education: [
      {
        date: "January 2023 – June 2023",
        name: " University of Arizona",
        summary: "Full Stack Boot Camp Certification",
      },
      {
        date: "August 2010 – December 2015",
        name: " University of Arizona",
        summary: "B.S. Mechanical Engineering and Mathematics Minor",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div
          id="resume"
          className="px-2 py-5 p-sm-5 container-fluid resume-container row"
        >
          <h2 className="resume-header text-center">
            My <span className="resume-span">Journey</span>
          </h2>
          <div className="text-center pb-4">
            <DownloadLink fileUrl={this.state.resume} />
          </div>

          <div className="col-md-6 resume-majorcolumn">
            <h3 className="text-center resume-subheader">Experience</h3>
            <div className="row px-5 resume-column">
              {this.state.experience.map((exp, index) => (
                <ResumeCard
                  key={index}
                  name={exp.name}
                  summary={exp.summary}
                  date={exp.date}
                />
              ))}
            </div>
          </div>

          <div className="col-md-6 resume-majorcolumn">
            <h3 className="text-center resume-subheader">Education</h3>
            <div className="row px-5 resume-column">
              {this.state.education.map((edu, index) => (
                <ResumeCard
                  key={index}
                  name={edu.name}
                  summary={edu.summary}
                  date={edu.date}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;

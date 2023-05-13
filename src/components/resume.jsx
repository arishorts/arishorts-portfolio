import Experience from "./common/experience";
import React, { Component } from "react";

class Resume extends Component {
  state = {
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
        <div id="resume" className="px-5 container-fluid">
          <h2 className="resume-header pt-5 pb-2 text-center">
            My <span className="resume-span">Journey</span>
          </h2>

          <div className="row g-5">
            <div className="col-md-6">
              <h3 className="text-center resume-subheader">Experience</h3>
              <div className="row px-5 resume-column">
                {this.state.experience.map((exp, index) => (
                  <div
                    className="col-12 my-2 resume-card rounded-4 "
                    key={index}
                  >
                    <Experience
                      name={exp.name}
                      summary={exp.summary}
                      date={exp.date}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <h3 className="text-center resume-subheader">Education</h3>
              <div className="row px-5 resume-column ">
                {this.state.education.map((edu, index) => (
                  <div
                    className="col-12 my-2 resume-card rounded-4"
                    key={index}
                  >
                    <Experience
                      name={edu.name}
                      summary={edu.summary}
                      date={edu.date}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;

import React, { Component } from "react";
import Project from "./common/project";

class Portfolio extends Component {
  state = {
    experience: [
      {
        date: "October 2019 – present",
        name: "Raytheon Technologies",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta dignissimos quam natus, delectus assumenda aut neque earum vel. Illo, at. Nihil magnam cupiditate voluptate.",
      },
      {
        date: "January 2019 – August 2019",
        name: "Watts Water Technologies",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta dignissimos quam natus, delectus assumenda aut neque earum vel. Illo, at. Nihil magnam cupiditate voluptate.",
      },
      {
        date: "July 2017 – January 2019",
        name: "Global Retool Group",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta dignissimos quam natus, delectus assumenda aut neque earum vel. Illo, at. Nihil magnam cupiditate voluptate.",
      },
      {
        date: "April 2016 – July 2017",
        name: "SMW Manufacturing",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta dignissimos quam natus, delectus assumenda aut neque earum vel. Illo, at. Nihil magnam cupiditate voluptate.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div id="portfolio" className="px-5 container-fluid">
          <h2 className="portfolio-header pt-5 pb-2 text-center">Portfolio</h2>
          <div className="row ">
            {this.state.experience.map((exp, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="resume-card p-2" style={{ height: "100%" }}>
                  <Project
                    name={exp.name}
                    summary={exp.summary}
                    date={exp.date}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;

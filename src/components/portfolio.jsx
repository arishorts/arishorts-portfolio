import React, { Component } from "react";
import Project from "./common/project";

class Portfolio extends Component {
  state = {
    repos: [
      // {
      //   name: "Blockflix",
      //   summary: "A web app for tracking and rating movies and TV shows.",
      //   date: "2021-05-10T20:15:36Z",
      //   url: "https://github.com/arishorts/blockflix",
      //   description:
      //     "Blockflix is a React app that uses the TMDb API to display movies and TV shows. Users can create an account, add movies and shows to their watchlist, and rate and review them.",
      // },
      {
        name: "My Tech Blog",
        summary: "A CMS-style blog site for developers.",
        date: "2021-03-20T15:40:22Z",
        url: "https://github.com/arishorts/my-tech-blog",
        description:
          "My Tech Blog is a Node.js app that uses Express.js, Handlebars.js, and Sequelize to allow users to create an account, write and edit blog posts, and comment on other users' posts.",
        image: "./mytechblog.jpeg",
      },
      {
        name: "NoteGenius",
        summary: "A web app for creating and sharing musical notes.",
        date: "2020-10-31T14:25:58Z",
        url: "https://github.com/arishorts/NoteGenius",
        description:
          "NoteGenius is a React app that uses the VexFlow library to allow users to create and share musical notes. Users can create an account, create and edit notes, and search for notes created by other users.",
        image: "./notegenius.jpeg",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="portfolio"
          className="px-5 py-5 portfolio-container container-fluid"
        >
          <h2 className="portfolio-header pb-2 text-center">Portfolio</h2>
          <div className="row">
            {this.state.repos.map((repo, index) => (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-6 py-2"
                key={index}
              >
                <div
                  className="resume-card p-2 rounded-4"
                  style={{ height: "100%" }}
                >
                  <Project
                    name={repo.name}
                    summary={repo.summary}
                    date={repo.date}
                    url={repo.url}
                    description={repo.description}
                    image={repo.image}
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

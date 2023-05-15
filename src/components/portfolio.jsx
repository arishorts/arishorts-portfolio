import React, { Component } from "react";
import PortfolioCard from "./common/portfoliocard";

class Portfolio extends Component {
  state = {
    repos: [
      {
        name: "Ballot-Box",
        url: "https://fathomless-gorge-67746.herokuapp.com/",
        description:
          "Join Ballot-Box and make your opinion count! This is a poll application, when opened, the user is presented with options for a poll.After clicking on one of the poll options, poll results appear on the screen in real-time. In addition, the user can create a poll and share the link with others.The user can delete a poll, if they would like.",
        image: "/public/ballotbox.jpg",
      },
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
        url: "https://github.com/arishorts/my-tech-blog",
        description:
          "This blogging app is a powerful tool for anyone who wants to create and share content on the web. It provides a simple and intuitive interface for users to write and publish blog posts on a variety of topics. The app also allows users to engage with each other through comments and social sharing, making it an ideal platform for building a community around a particular topic or niche.",
        image: "/public/mytechblog.jpeg",
      },
      {
        name: "NoteGenius",
        url: "https://github.com/arishorts/NoteGenius",
        description:
          "The front end of this application is built using bootstrap-esque css and javascript. The backend is using the Express framework for Node.js, and the frontend is using vanilla JavaScript to interact with the server via RESTful APIs. The Note Taker application allows users to create, save, and view notes. Overall, the Note Taker application provides users with a simple and intuitive way to take and organize notes.",
        image: "/public/notegenius.jpeg",
      },
      {
        name: "J.A.T.E",
        url: "https://arishorts-jate.herokuapp.com/",
        description:
          "This app is a text editor that allows users to create and edit a text file. It has a simple interface and features basic functionality. One unique feature of this text editor is its ability to be installed as a progressive web app (PWA). This app configures a Webpack development environment for a web application called J.A.T.E. It sets up plugins that generate HTML and a manifest file, add CSS loaders and Babel, and inject a custom service worker to cache assets and pages for offline access.",
        image: "/public/jate.jpg",
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
          <h2 className="portfolio-header pb-2 text-center">
            My <span className="portfolio-span">Portfolio</span>
          </h2>
          <div className="row justify-content-evenly">
            {this.state.repos.map((repo, index) => (
              <div
                className="col-12 col-sm-5 col-md-5 col-lg-5 py-2 my-4"
                key={index}
              >
                <div
                  className="portfolio-card p-2 rounded-4"
                  style={{ height: "100%" }}
                >
                  <PortfolioCard
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

import React, { Component } from "react";
import Project from "./common/project";

class Portfolio extends Component {
  state = {
    resume: process.env.PUBLIC_URL + "/Ariel_Schwartz_Resume.pdf",
    repos: [
      {
        name: "E-Commerce Store",
        url: "https://arishorts-e-commerce-store.herokuapp.com/",
        description:
          "HTML, CSS, Javascript, Node.js, Express, React, React-Router, React-Redux, Concurrently, Apollo-Server, Bcrypt, GraphQL, MongoDB, Mongoose, Stripe, JSON Webtoken.",
        image: process.env.PUBLIC_URL + "/ecommerce.jpeg",
        github: "https://github.com/arishorts/E-Commerce-Store",
      },
      {
        name: "Google-Bookstore",
        url: "https://arishorts-googlebookstore.herokuapp.com/",
        description:
          "HTML, CSS, Javascript, Node.js, Express, React, React-Router, React Bootstrap, Concurrently, Apollo-Server, Bcrypt, GraphQL, MongoDB, Mongoose, JSON Webtoken.",
        image: process.env.PUBLIC_URL + "/bookstore.jpeg",
        github: "https://github.com/arishorts/googlebookstore",
      },
      {
        name: "J.A.T.E",
        url: "https://arishorts-jate.herokuapp.com/",
        description:
          "HTML, CSS, Javascript, Node.js, Express, Progressive Web App (PWA), Concurrently, Babel, CSS-loader, Manifest, and Custom service worker.",
        image: process.env.PUBLIC_URL + "/jate.jpg",
        github: "https://github.com/arishorts/PWA-Text-Editor",
      },
      {
        name: "Ballot-Box",
        url: "https://fathomless-gorge-67746.herokuapp.com/",
        description:
          "HTML, CSS, Javascript, Node.js, Express, Bootstrap, Handlebars, Express-Session, Express-Handlebars, Sequelize, MySQL, Chart.js, Bcrypt.",
        image: process.env.PUBLIC_URL + "/ballotbox.jpg",
        github: "https://github.com/arishorts/Ballot-Box",
      },
      {
        name: "Social Network API",
        url: "https://youtu.be/Xvf9rbceKlI",
        description:
          "HTML, CSS, Javascript, Node.js, Express, NoSQL, MongoDB, Mongoose, Joi, Dayjs.",
        image: process.env.PUBLIC_URL + "/socialnetworkapi.jpeg",
        github: "https://github.com/arishorts/social-network-api",
      },
      {
        name: "My Tech Blog",
        url: "https://arishorts-mytechblog.herokuapp.com/",
        description:
          "HTML, CSS, Javascript, Node.js, Express, Handlebars.js, MySQL, Sequelize, Express-session, Bcrypt, Jest.",
        image: process.env.PUBLIC_URL + "/mytechblog.jpeg",
        github: "https://github.com/arishorts/my-tech-blog",
      },
      {
        name: "MealMate",
        url: "https://arishorts.github.io/MealMate2.0/",
        description: `HTML, CSS, Javascript, Tailwind, Spoonacular API, Google Maps and Places API.`,
        image: process.env.PUBLIC_URL + "/mealmate.jpeg",
        github: "https://arishorts.github.io/MealMate2.0/",
      },
      {
        name: "NoteGenius",
        url: "https://arishorts-notegenius.herokuapp.com/",
        description: "HTML, CSS, Javascript, Express, Node.js, Joi.",
        image: process.env.PUBLIC_URL + "/notegenius.jpeg",
        github: "https://github.com/arishorts/NoteGenius",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="portfolio"
          className="py-5 portfolio-container container-fluid"
        >
          <h2 className="portfolio-header text-center">
            My <span className="portfolio-span">Portfolio</span>
          </h2>

          <div className="row justify-content-center px-4">
            {this.state.repos.map((repo, index) => (
              <div className="col-12 col-md-5 col-sm-6 g-lg-5 gy-4" key={index}>
                <div
                  className="portfolio-card rounded-4"
                  style={{ height: "100%" }}
                >
                  <Project
                    name={repo.name}
                    url={repo.url}
                    description={repo.description}
                    image={repo.image}
                    github={repo.github}
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

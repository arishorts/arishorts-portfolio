import React, { Component } from "react";
import Project from "./common/project";

class Portfolio extends Component {
  state = {
    resume: process.env.PUBLIC_URL + "/Ariel_Schwartz_Resume.pdf",
    repos: [
      {
        name: "Ballot-Box",
        url: "https://fathomless-gorge-67746.herokuapp.com/",
        description: `Join Ballot-Box and make your opinion count! Users can now view polls and their results in real-time, the can also create and and delete a poll if desired. This was a collaborative front-end project. This app instantiates and implements a RESTful API through the use of Node.js and Express.js. Utilization of Handlebars.js as the templating engine, MySQL with Sequelize ORM for the database, and the deployment on Heroku make for a polished, responsive, and interactive user interfaces. Moreover, this app also provides features such as session authentication with cookies and authorization, which ensures users can securely log in and manage their polls. An additional goal of this app was to explore ChartJS, a library dedicated to data visualization. Additionally, a presentation was delivered, highlighting the elevator pitch, concept, development process, demo, and directions for future development.`,
        image: process.env.PUBLIC_URL + "/ballotbox.jpg",
        github: "https://github.com/ttieman/Ballot-Box",
      },
      // {
      //   name: "Blockflix",
      //   url: "https://github.com/arishorts/blockflix",
      //   description:
      //     "Blockflix is a React app that uses the TMDb API to display movies and TV shows. Users can create an account, add movies and shows to their watchlist, and rate and review them.",
      // },
      {
        name: "J.A.T.E",
        url: "https://arishorts-jate.herokuapp.com/",
        description:
          "Just Another Text Editor is a text editor that allows users to create and edit a text file. It has a simple interface and features basic functionality. One unique feature of this text editor is its ability to be installed as a progressive web app (PWA). This app configures a Webpack development environment for a web application called J.A.T.E. It sets up plugins that generate HTML and a manifest file, add CSS loaders and Babel, and inject a custom service worker to cache assets and pages for offline access.",
        image: process.env.PUBLIC_URL + "/jate.jpg",
        github: "https://github.com/arishorts/PWA-Text-Editor",
      },
      {
        name: "Social Network API",
        url: "https://youtu.be/Xvf9rbceKlI",
        description:
          "This Social Network API taught me skills needed for building a robust social network web application. This project utilized MongoDB as a NoSQL database, which is favored in social network platforms for handling large amounts of unstructured data. Express.js is used for routing and implementing a Mongoose ODM to interact with the MongoDB database. The API has several routes for users and thoughts, including ability to create, update, and delete their own thoughts, as well as react to the thoughts of others. Users also are able to create and delete on their own friend lists, and the API will be able to retrieve data for all users and thoughts, as well as for a single user or thought by its ID. This project showcases my ability to format timestamps and handle data validation using Mongoose's schema settings. A comprehensive walkthrough video has been included that showcases functionality of the API. With this project, I demonstrated skills in building a performant and scalable social network API using NoSQL technologies.",
        image: process.env.PUBLIC_URL + "/socialnetworkapi.jpeg",
        github: "https://github.com/arishorts/social-network-api",
      },
      {
        name: "My Tech Blog",
        url: "https://arishorts-mytechblog.herokuapp.com/",
        description: `This blogpost application showcases proficiency in several essential skill and is a powerful tool for anyone who wants to create and share content on the web. It provides a simple and intuitive interface for users to write and publish blog posts on a variety of topics. The app also allows users to engage with each other through comments, making it a platform for building a community around a particular topic or niche.  By building a blog site from scratch and deploying it to Heroku, I demonstrated ability to work with the Model-View-Controller (MVC) architectural pattern. Utilizing Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication, this ensures that users can securely log in and manage their blogposts and comments. The application follows best practices for file structure, naming conventions, and coding standards, as reflected in the repository's quality.`,
        image: process.env.PUBLIC_URL + "/mytechblog.jpeg",
        github: "https://github.com/arishorts/my-tech-blog",
      },
      {
        name: "NoteGenius",
        url: "https://arishorts-notegenius.herokuapp.com/",
        description:
          "The Note Taker application allows users to create, save, and view notes. Overall, the application provides users with a simple and intuitive way to take and organize notes. The front end of this application is built using bootstrap-esque css and javascript. The backend is using the Express framework for Node.js, and the frontend is using vanilla JavaScript to interact with the server via RESTful APIs.",
        image: process.env.PUBLIC_URL + "/notegenius.jpeg",
        github: "https://github.com/arishorts/NoteGenius",
      },
      {
        name: "MealMate",
        url: "https://arishorts.github.io/MealMate2.0/",
        description: `The MealMate app is a tool for anyone looking to streamline meal planning and tracking their favorite recipes. The app allows you to generate a meal plan, with the option to search for recipes based on ingredients in your kitchen utlizing calls to the Spoonacular API. It also implements Google Maps and Places API to share the closest grocery stores near you. Clicking any recipe will display a detailed information section where you can view important badges, such as "gluten-free" or "vegetarian", and get a closer look at the ingredients and nutritional information. This was a collaborative front-end project that required a CSS framework other than Bootstrap, deployment to GitHub Pages, interactivity with user input, integration of server-side APIs, utilization of client-side storage for persistent data, responsiveness, polished UI design, and adherence to quality coding standards. Additionally, a presentation was delivered, highlighting the elevator pitch, concept, development process, demo, and directions for future development.`,
        image: process.env.PUBLIC_URL + "/mealmate.jpeg",
        github: "https://arishorts.github.io/MealMate2.0/",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div id="portfolio" className="p-5 portfolio-container container-fluid">
          <h2 className="portfolio-header text-center">
            My <span className="portfolio-span">Portfolio</span>
          </h2>

          <div className="row justify-content-evenly">
            {this.state.repos.map((repo, index) => (
              <div className="col-12 col-md-6 g-5" key={index}>
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

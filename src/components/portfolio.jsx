import React, { Component } from "react";
import Project from "./common/project";

class Portfolio extends Component {
  state = {
    resume: process.env.PUBLIC_URL + "/Ariel_Schwartz_Resume.pdf",
    repos: [
      {
        name: "Ballot-Box",
        url: "https://fathomless-gorge-67746.herokuapp.com/",
        description: `Join Ballot-Box and make your opinion count! After clicking on one of the polls, results will appear on the screen in real-time. In addition, the user can create and and delete a poll if they would like. This is a polling application that, through the use of Node.js and Express.js, instantiates and implements a RESTful API. The utilization of Handlebars.js as the templating engine, MySQL with Sequelize ORM for the database, and the deployment on Heroku make for a polished, responsive, and interactive user interfaces. Moreover, this app also provides features such as session authentication with cookies and authorization, which ensures users can securely log in and manage their polls. An additional goal of this app was to explore ChartJS, a library dedicated to data visualization.`,
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
          "This app is a text editor that allows users to create and edit a text file. It has a simple interface and features basic functionality. One unique feature of this text editor is its ability to be installed as a progressive web app (PWA). This app configures a Webpack development environment for a web application called J.A.T.E. It sets up plugins that generate HTML and a manifest file, add CSS loaders and Babel, and inject a custom service worker to cache assets and pages for offline access.",
        image: process.env.PUBLIC_URL + "/jate.jpg",
        github: "https://github.com/arishorts/PWA-Text-Editor",
      },
      {
        name: "Social Network API",
        url: "https://youtu.be/Xvf9rbceKlI",
        description:
          "Through my Social Network API, I have applied various skills that are essential for building a robust social network web application. This project demonstrates proficiency in utilizing MongoDB as a NoSQL database, which is widely favored in social network platforms for its efficiency in handling large amounts of unstructured data. Express.js is used for routing and implementing a Mongoose ODM to interact with the MongoDB database. The API has several routes for users and thoughts, including GET, POST, PUT, and DELETE routes. Users are able to create, update, and delete their own thoughts, as well as react to the thoughts of others. Users also are able to create and delete on their own friend lists, and the API will be able to retrieve data for all users and thoughts, as well as for a single user or thought by its ID. I have also showcased my ability to format timestamps and handle data validation using Mongoose's schema settings. The project includes a comprehensive walkthrough video that showcases the functionality of the API. With this project, I have demonstrated my skills in building a performant and scalable social network API using NoSQL technologies.",
        image: process.env.PUBLIC_URL + "/socialnetworkapi.jpeg",
        github: "https://github.com/arishorts/social-network-api",
      },
      {
        name: "My Tech Blog",
        url: "https://arishorts-mytechblog.herokuapp.com/",
        description: `Through this blogpost application I have showcased my proficiency in several essential skills. This blogging app is a powerful tool for anyone who wants to create and share content on the web. It provides a simple and intuitive interface for users to write and publish blog posts on a variety of topics. The app also allows users to engage with each other through comments, making it an ideal platform for building a community around a particular topic or niche.  By building a blog site from scratch and deploying it to Heroku, I have demonstrated my ability to work with the Model-View-Controller (MVC) architectural pattern. Utilizing Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication, this ensures that users can securely log in and manage their blogposts and comments. The application follows best practices for file structure, naming conventions, and coding standards, as reflected in the repository's quality and the inclusion of descriptive commit messages.`,
        image: process.env.PUBLIC_URL + "/mytechblog.jpeg",
        github: "https://github.com/arishorts/my-tech-blog",
      },
      {
        name: "NoteGenius",
        url: "https://arishorts-notegenius.herokuapp.com/",
        description:
          "The front end of this application is built using bootstrap-esque css and javascript. The backend is using the Express framework for Node.js, and the frontend is using vanilla JavaScript to interact with the server via RESTful APIs. The Note Taker application allows users to create, save, and view notes. Overall, the Note Taker application provides users with a simple and intuitive way to take and organize notes.",
        image: process.env.PUBLIC_URL + "/notegenius.jpeg",
        github: "https://github.com/arishorts/NoteGenius",
      },
      {
        name: "MealMate",
        url: "https://arishorts.github.io/MealMate2.0/",
        description: `The Spoonacular Meal Planner and Notebook app is the perfect tool for anyone looking to streamline their meal planning and keep track of their favorite recipes and ingredients. The app allows you to generate a meal plan, with the option to add your own ingredients and recipes to a personal notebook. With its intuitive design, using the Spoonacular app is a breeze! Simply select your preferred meals and ingredients, and let the app do the rest. The app also features a detailed information section for each item, where you can view important badges, such as "gluten-free" or "vegetarian", and get a closer look at the ingredients and nutritional information. The notebook feature allows you to keep track of all your favorite recipes and ingredients, making it easy to plan and prepare meals in the future. The Spoonacular app is a one-stop-shop for all your meal planning needs, making it the perfect tool for anyone looking to streamline their meal preparation and stay organized.`,
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

import "./App.css";
import React, { useState } from "react";
import ContactMe from "./components/contactme";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
import Footer from "./components/footer";
import NavBar from "./components/common/navbar";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <main className="main-container">
        <div id="top"></div>
        <NavBar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Resume />
        <ContactMe />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import React from "react";
import ContactMe from "./components/contactme";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
import Header from "./components/common/header";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <main className="main-container" style={{}}>
        <Header />
        <div id="top"></div>
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

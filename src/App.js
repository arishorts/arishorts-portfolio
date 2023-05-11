import "./App.css";
import React from "react";
// import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/common/navbar";
// import NotFound from "./components/notFound";
import ContactMe from "./components/contactMe";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
import Header from "./components/common/header";

function App() {
  return (
    <React.Fragment>
      <main>
        <Header />
        <div id="top"></div>
        <AboutMe />
        <Portfolio />
        <Resume />
        <ContactMe />
        {/* <Routes> */}
        {/* <Route path="contactme" index element={<RegisterForm />} />
        <Route path="/home" index element={<Main />} />
        <Route path="/aboutme" index element={<AboutMe />} />
        <Route path="/resume" index element={<Resume />} />
        <Route path="/" index element={<Main />} />
        <Route path="*" element={<NotFound />} /> */}
        {/* </Routes> */}
      </main>
    </React.Fragment>
  );
}

export default App;

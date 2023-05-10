import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/navbar";
import NotFound from "./components/notFound";
import RegisterForm from "./components/registerForm";
import Main from "./components/main";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="contactme" index element={<RegisterForm />} />
            <Route path="/home" index element={<Main />} />
            <Route path="/aboutme" index element={<AboutMe />} />
            <Route path="/resume" index element={<Resume />} />
            <Route path="/" index element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import ContactMe from "./components/contactme";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
import Header from "./components/common/header";
import Footer from "./components/footer";
import NavBar from "./components/common/navbar";

function App() {
  // const [currentPage, setCurrentPage] = useState("AboutMe");

  // TODO: Add a comment describing the functionality of this method
  // const renderPage = () => {
  //   if (currentPage === "AboutMe") {
  //     return <AboutMe />;
  //   }
  //   if (currentPage === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === "Resume") {
  //     return <Resume />;
  //   }
  //   return <ContactMe />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.Fragment>
      <main className="main-container">
        <div id="top"></div>
        <NavBar />
        {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
        {/* {renderPage()} */}
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

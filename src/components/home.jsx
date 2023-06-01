import React from "react";

const Home = () => {
  return (
    <div
      className="container-fluid home-container p-4 p-sm-5 d-flex align-items-center"
      id="home"
    >
      <div className="row mt-5 p-5">
        <div className="col-12 col-lg-8 d-flex align-items-center pe-5">
          <section className="">
            <h1 className="home-header ">
              Hi, i'm <span className="home-span">Ariel Schwartz</span>
            </h1>
            <h3 className="home-subheader">Backend Developer</h3>
            <p className="pt-3 home-content">
              Welcome to my web development portfolio, where I share digital
              creations through full stack development. With an eye for detail
              and a passion for cutting-edge technologies, I build
              customer-oriented interfaces with robust back-end systems for
              dynamic front-end interactions. Join me on this journey as I
              pursue an enriching career, one line of code at a time.
            </p>
          </section>
        </div>
        <div className="col-12 col-lg-4 text-center pe-5">
          <picture className="home-img">
            <img
              className="mt-5 mx-3"
              alt="Ariel"
              srcSet={process.env.PUBLIC_URL + "/photo.JPG"}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Home;

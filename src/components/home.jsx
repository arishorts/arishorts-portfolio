import React from "react";

const Home = () => {
  return (
    <div
      className="container-fluid home-container p-4 p-sm-5 d-flex align-items-center"
      id="home"
    >
      <div className="row mt-5">
        <div className="col-12 col-lg-8 d-flex align-items-center">
          <section className="fs-5 px-5">
            <h1 className="home-header ">
              Hi, i'm <span className="home-span">Ariel Schwartz</span>
            </h1>
            <h3 className="home-subheader">Backend Developer</h3>
            <p className="pt-3 home-content">
              Welcome to my web development portfolio, where I embark on a
              mission to craft innovative digital experiences through full stack
              development. With a meticulous eye for detail and a passion for
              cutting-edge technologies, I strive to create seamless user
              interfaces, robust back-end systems for dynamic front-end
              interactions that redefine the online landscape. Join me on this
              journey as we shape the future of the web, one line of code at a
              time.
            </p>
          </section>
        </div>
        <div className="col-12 col-lg-4 text-center">
          <picture className="home-img">
            <img
              className="img-fluid mt-5"
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

import React from "react";
// import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="container-fluid p-4 p-sm-5" id="aboutme">
      <h2 className="text-center aboutme-header mt-5 pb-1">
        About <span className="aboutme-span">Me</span>
      </h2>

      <picture className="about-img m-4">
        <img alt="Ariel" srcSet={process.env.PUBLIC_URL + "/headshot.webp"} />
        <span className="circle-spin"></span>
      </picture>

      <section className="fs-5 px-5 aboutme-content">
        <h2 className="aboutme-header">Hi im Ariel Schwartz</h2>
        <h3>Backend Developer</h3>
        <p className="pt-3">
          I have a passion for building beautiful and functional web
          applications. Welcome to my portfolio! 🚀 I have B.S. in mechanical
          engineering from the University of Arizona (ABET) with a minor in
          mathematics. I have found demonstrating engineering rigor to be
          rewarding and aim to challenge myself with a new career and technical
          industry innovation. With a strong analytical background, 7+ years of
          industry experience using Mechanical Engineering, a certification in
          Full Stack including skills in Agile Software Development, I build
          client-based solutions.
        </p>
        <p>
          I’ve had the opportunity to work on a number of incredible projects
          that have allowed me to grow and establish myself within this
          competitive industry. I hope you’ll enjoy viewing my projects as much
          as I enjoyed working on them. Don’t hesitate to reach out to
          arieljschwartz@gmail.com if you have any questions.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;

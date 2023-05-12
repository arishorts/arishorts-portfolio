import React from "react";
// import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="container-fluid py-5 px-5" id="aboutme">
      <h1 className="text-center aboutme-header mb-3">About Me</h1>

      <picture className="row justify-content-center">
        {/* <motion.div
          className="row justify-content-center"
          animate={{
            scale: [1, 1.05, 1.05, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
        > */}
        <img
          src="/headshot.webp"
          alt=""
          srcset="/headshot.webp"
          className="col-4 mb-4 p-0"
          style={{
            borderRadius: "10%",
            objectFit: "cover",
            objectPosition: "center",
            width: 300,
            height: 300,
            border: "1px solid black",
          }}
        />
        {/* </motion.div> */}
      </picture>
      <section className="fs-5 aboutme-content">
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

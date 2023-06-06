import React from "react";

const AboutMe = () => {
  return (
    <div className="container-fluid p-4 p-sm-5" id="aboutme">
      <h2 className="text-center aboutme-header pb-1 mt-5">
        About <span className="aboutme-span">Me</span>
      </h2>

      <picture className="about-img my-4">
        <img alt="Ariel" srcSet={process.env.PUBLIC_URL + "/headshot.webp"} />
        <span className="circle-spin"></span>
      </picture>

      <section className="fs-5 px-lg-5 p-2 aboutme-content">
        <p className="pt-3">
          As a recent graduate and long-time admirer of the web development
          field, I am thrilled to pursue open positions for a Backend Developer
          or related roles. At present I am employed with Raytheon Technologies,
          thus, I feel that my relevant technology industry experience would be
          of great value to any technologically oriented company. I am proud of
          my 3.6 GPA B.S. in Mechanical Engineering as well as 7 years of real
          world experience, and have found this rewarding – however, not the
          correct fit. Having spent countless hours tinkering on my own projects
          and completing a certificate, my aim is to continue challenging myself
          in a professional web development position.
        </p>
        <p>
          I’ve had the opportunity to work on a number of web-based
          client-server applications that have allowed me to grow and establish
          within this competitive industry. Within these solo and team projects
          I've deployed intuitive front-end interfaces, with robust back-ends
          utilizing performance optimization strategies. My experience is
          supplemented by modern best practices in Agile/Scrum methodology. I
          believe these skills would be an asset to any company and hope you’ll
          enjoy viewing my projects as much as I enjoyed working on them.
        </p>
        <p>
          I am enthusiastic of the possibility of discussing how my skills and
          experiences align with your needs and goals.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;

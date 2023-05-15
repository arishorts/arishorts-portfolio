import React from "react";
import { BsGithub } from "react-icons/bs";
// import { Tooltip } from "react-tooltip";

function PortfolioCard({
  name,
  summary,
  date,
  url,
  description,
  image,
  github,
}) {
  return (
    <div className="project">
      <a className="github-link" href={github}>
        <BsGithub />
      </a>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-header text-center"
        style={{ textDecoration: "none" }}
      >
        <h4>{name}</h4>
      </a>
      <a href={url}>
        <picture className="row justify-content-center m-2">
          <img
            alt=""
            srcSet={image}
            className="p-0 rounded-4 project-picture"
            style={{
              borderRadius: "5%",
              objectPosition: "center",
              width: "auto",
              border: "1px solid black",
            }}
          />
        </picture>
      </a>
      <p className="project-content mx-3">{description}</p>
      {/* <div className="description" data-tip={description}>
        Hover to see description
      </div>
      <Tooltip effect="solid" place="top" /> */}
    </div>
  );
}

export default PortfolioCard;

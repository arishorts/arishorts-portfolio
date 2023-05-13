import React from "react";
// import { Tooltip } from "react-tooltip";

function Project({ name, summary, date, url, description, image }) {
  return (
    <div className="project">
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

export default Project;

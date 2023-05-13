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
        <picture className="row justify-content-center m-3">
          <img
            alt=""
            srcSet={image}
            className="col-4 mb-4 p-0 rounded-4 project-pricture"
            style={{
              borderRadius: "5%",
              objectPosition: "center",
              width: "auto",
              height: "auto",
              border: "1px solid black",
            }}
          />
        </picture>
      </a>
      <p className="project-content">{description}</p>
      {/* <div className="description" data-tip={description}>
        Hover to see description
      </div>
      <Tooltip effect="solid" place="top" /> */}
    </div>
  );
}

export default Project;

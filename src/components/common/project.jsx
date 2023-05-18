import React from "react";
import { BsGithub } from "react-icons/bs";
// import { Tooltip } from "react-tooltip";
import { Container, Row } from "react-bootstrap";

function Project({ name, url, description, image, github }) {
  return (
    <Container className="project">
      <Row className="p-2">
        <a className="github-link" href={github}>
          <BsGithub />
        </a>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-header text-center"
        >
          <h4 className="project-header mt-2">{name}</h4>
        </a>
      </Row>
      <a href={url}>
        <picture className="row justify-content-center mx-2 mb-3">
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
      <p className="project-content px-2">{description}</p>
      {/* <div className="description" data-tip={description}>
        Hover to see description
        </div>
      <Tooltip effect="solid" place="top" /> */}
    </Container>
  );
}

export default Project;

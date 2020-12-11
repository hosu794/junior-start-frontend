import React from "react";
import PropTypes from "prop-types";
import ProjectLinkButton from "./ProjectLinkButton";

const ProjectItem = ({ id, name, title, description, creator }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      Created by: {creator ? creator : "Annonymous"}
      <ProjectLinkButton name={name} />
    </div>
  );
};

ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creator: PropTypes.object,
};

export default ProjectItem;

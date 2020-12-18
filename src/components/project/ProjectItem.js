import React from "react";
import PropTypes from "prop-types";
import ProjectLinkButton from "./ProjectLinkButton";
import ProjectDeleteButton from "./ProjectDeleteButton";
import ProjectUpdateLinkButton from "./ProjectUpdateLinkButton";

const ProjectItem = ({
  id,
  name,
  title,
  description,
  creator,
  currentUser,
}) => {
  const isSameEmailAndNotNullCurrentUser =
    currentUser && currentUser.email === creator.email;

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      Created by: {creator ? creator.email : "Annonymous"}
      <ProjectLinkButton id={id} />
      {isSameEmailAndNotNullCurrentUser ? (
        <ProjectDeleteButton reload={false} id={id} />
      ) : null}
      {isSameEmailAndNotNullCurrentUser ? (
        <ProjectUpdateLinkButton id={id} />
      ) : null}
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

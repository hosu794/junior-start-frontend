import React from "react";
import PropTypes from "prop-types";
import ProjectLinkButton from "./ProjectLinkButton";
import ProjectDeleteButton from "./ProjectDeleteButton";
import ProjectUpdateLinkButton from "./ProjectUpdateLinkButton";
import { ProjectPaper } from "../../styles/postStyles";
import { Box, Typography } from "@material-ui/core";

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
    <Box display="flex">
      <ProjectPaper>
        <Typography variant="h5">Name: {name}</Typography>
        <Typography variant="h6">Title: {title}</Typography>
        <Typography variant="subtitle1">Description: {description}</Typography>
        <Typography variant="subtitle1">
          Created by: {creator ? creator.email : "Annonymous"}
        </Typography>
        <Box display="flex" m={1}>
          <ProjectLinkButton id={id} />
          {isSameEmailAndNotNullCurrentUser ? (
            <ProjectDeleteButton reload={false} id={id} />
          ) : null}
          {isSameEmailAndNotNullCurrentUser ? (
            <ProjectUpdateLinkButton id={id} />
          ) : null}
        </Box>
      </ProjectPaper>
    </Box>
  );
};

ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creator: PropTypes.object,
};

export default ProjectItem;

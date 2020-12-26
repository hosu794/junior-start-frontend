import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Link as StyledLink } from "@material-ui/core";
import { Button } from "../../styles/customButton";

const ProjectLinkButton = ({ id }) => {
  const projectLink = `/project/${id}`;

  return (
    <Link to={projectLink}>
      <StyledLink>
        <Button marginRight={1} variant="contained" color="primary">
          Open
        </Button>
      </StyledLink>
    </Link>
  );
};

ProjectLinkButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectLinkButton;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Link as StyledLink } from "@material-ui/core";
import { Button } from "../../styles/customButton";

const ProjectUpdateLinkButton = ({ id }) => {
  const updateProjectLink = `/project/update/${id}`;

  return (
    <Link to={updateProjectLink}>
      <StyledLink>
        <Button color="primary" marginX={1} variant="contained">
          Update
        </Button>
      </StyledLink>
    </Link>
  );
};

ProjectUpdateLinkButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectUpdateLinkButton;

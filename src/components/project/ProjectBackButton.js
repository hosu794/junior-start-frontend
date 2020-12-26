import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../styles/customButton";

const ProjectBackButton = ({ title, onClick }) => {
  return (
    <Button
      mt={3}
      variant="contained"
      data-testid="project-open-button"
      color="primary"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

ProjectBackButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ProjectBackButton;

import React from "react";
import PropTypes from "prop-types";

const ProjectBackButton = ({ title, onClick }) => {
  return (
    <React.Fragment>
      <button onClick={onClick}>{title}</button>
    </React.Fragment>
  );
};

ProjectBackButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ProjectBackButton;

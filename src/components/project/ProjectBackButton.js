import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectBackButton = ({ title }) => {
  let history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <React.Fragment>
      <button onClick={handleBack}>{title}</button>
    </React.Fragment>
  );
};

ProjectBackButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectBackButton;

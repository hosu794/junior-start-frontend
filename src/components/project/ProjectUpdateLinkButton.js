import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectUpdateLinkButton = ({ id }) => {
  const updateProjectLink = `/project/update/${id}`;

  return (
    <React.Fragment>
      <Link to={updateProjectLink}>
        <button>Update</button>
      </Link>
    </React.Fragment>
  );
};

ProjectUpdateLinkButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectUpdateLinkButton;

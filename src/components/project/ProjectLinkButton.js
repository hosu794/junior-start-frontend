import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectLinkButton = ({ id }) => {
  const projectLink = `/project/${id}`;

  return (
    <React.Fragment>
      <Link to={projectLink}>
        <button>Open</button>
      </Link>
    </React.Fragment>
  );
};

ProjectLinkButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectLinkButton;

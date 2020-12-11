import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { projectActions } from "../../actions";

const ProjectComponent = () => {
  let { name } = useParams();

  const dispatch = useDispatch();

  const getProject = useCallback(() => {
    dispatch(projectActions.getByName(name));
  }, [dispatch, name]);

  useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <div>
      Project Component
      <p>Id: {name ? name : "name not found"}</p>
    </div>
  );
};

ProjectComponent.propTypes = {
  id: PropTypes.number,
};

export default ProjectComponent;

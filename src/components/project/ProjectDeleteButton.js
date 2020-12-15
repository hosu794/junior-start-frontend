import React from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../actions";

import { useHistory } from "react-router-dom";

const ProjectDeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = async () => {
    await console.log(`Delete project ${id}`);
    await dispatch(projectActions.deleteProject(id));
  };

  return (
    <React.Fragment>
      <button onClick={onClick}>Delete</button>
    </React.Fragment>
  );
};

export default ProjectDeleteButton;

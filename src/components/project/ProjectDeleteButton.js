import React from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../actions";

const ProjectDeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const onClick = async () => {
    await dispatch(projectActions.deleteProject(id));
  };

  return (
    <React.Fragment>
      <button onClick={onClick}>Delete</button>
    </React.Fragment>
  );
};

export default ProjectDeleteButton;

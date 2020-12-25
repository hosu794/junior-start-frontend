import React from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../actions";
import { useHistory } from "react-router-dom";

const ProjectDeleteButton = ({ id, reload }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = async () => {
    await dispatch(projectActions.deleteProject(id));
  };

  const onClickAndBack = async () => {
    await dispatch(projectActions.deleteProject(id));
    await history.goBack();
  };

  return (
    <React.Fragment>
      <button
        data-testid="project-delete-button"
        onClick={reload ? onClickAndBack : onClick}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default ProjectDeleteButton;

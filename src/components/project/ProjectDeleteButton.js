import React from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../actions";
import { useHistory } from "react-router-dom";
import { Button } from "../../styles/customButton";

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
    <div>
      <Button
        marginX={1}
        size="medium"
        variant="contained"
        color="secondary"
        data-testid="project-delete-button"
        onClick={reload ? onClickAndBack : onClick}
      >
        Delete
      </Button>
    </div>
  );
};

export default ProjectDeleteButton;

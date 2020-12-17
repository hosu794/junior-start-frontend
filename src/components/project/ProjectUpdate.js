import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { projectActions } from "../../actions";
import {
  currrentUserSelector,
  projectCurrentItemSelector,
} from "../../selectors";
import ProjectUpdateForm from "./ProjectUpdateForm";

const ProjectUpdate = () => {
  let { name } = useParams();

  const project = useSelector(projectCurrentItemSelector);
  const dispatch = useDispatch();
  const currentUser = useSelector(currrentUserSelector);

  const getProject = useCallback(() => {
    dispatch(projectActions.getByName(name));
  }, [dispatch, name]);

  const isSameEmailAndNotNullCurrentUser =
    currentUser && project && currentUser.email === project.creator.email;

  useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <div>
      <h2>Update Project</h2>
      <div>
        {isSameEmailAndNotNullCurrentUser ? (
          <ProjectUpdateForm
            id={project.id}
            body={project.body}
            name={project.name}
            title={project.title}
            description={project.description}
            numberOfSeats={project.numberOfSeats}
            recruiting={project.recruiting}
            repository={project.repository}
          />
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};

export default ProjectUpdate;

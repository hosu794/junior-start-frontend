import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { projectActions } from "../../actions";
import {
  currrentUserSelector,
  projectCurrentItemSelector,
} from "../../selectors";
import ProjectUpdateForm from "./ProjectUpdateForm";

const ProjectUpdate = () => {
  let { id } = useParams();

  const project = useSelector(projectCurrentItemSelector);
  const dispatch = useDispatch();
  const currentUser = useSelector(currrentUserSelector);

  const getProject = useCallback(() => {
    dispatch(projectActions.findById(id));
  }, [dispatch, id]);

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

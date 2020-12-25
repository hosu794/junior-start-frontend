import React, { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";
import { projectCurrentItemSelector } from "../../selectors/project.selectors";
import ProjectBackButton from "./ProjectBackButton";
import { currrentUserSelector } from "../../selectors";
import ProjectDeleteButton from "./ProjectDeleteButton";
import ProjectCredentials from "./ProjectCredentials";
import ProjectLoading from "./ProjectLoading";

const ProjectComponent = () => {
  let { id } = useParams();

  let history = useHistory();

  function handleBack() {
    history.goBack();
  }

  const project = useSelector(projectCurrentItemSelector);
  const currentUser = useSelector(currrentUserSelector);

  const isSameEmailAndNotNullCurrentUser =
    currentUser && project && currentUser.email === project.creator.email;

  const dispatch = useDispatch();

  const getProject = useCallback(() => {
    dispatch(projectActions.findById(id));
  }, [dispatch, id]);

  useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <div>
      {project ? (
        <div>
          <ProjectCredentials
            id={project.id}
            recruting={project.recruting}
            key={project.id}
            title={project.title}
            description={project.description}
            body={project.body}
            name={project.name}
            numberOfSeats={project.numberOfSeats}
            teamMembers={project.teamMembers}
            mentor={project.mentor}
            creator={project.creator}
          />
        </div>
      ) : (
        <ProjectLoading />
      )}
      <ProjectBackButton onClick={handleBack} title="Back to projects" />
      {isSameEmailAndNotNullCurrentUser ? (
        <ProjectDeleteButton reload={true} id={project.id} />
      ) : null}
    </div>
  );
};

ProjectComponent.propTypes = {
  id: PropTypes.number,
};

export default ProjectComponent;

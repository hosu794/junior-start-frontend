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
import { Box } from "@material-ui/core";
import ProjectUpdateLinkButton from "./ProjectUpdateLinkButton";

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
      <Box flex>
        <Box>
          <ProjectBackButton onClick={handleBack} title="Back to projects" />
        </Box>
        {isSameEmailAndNotNullCurrentUser ? (
          <Box>
            <ProjectDeleteButton y={2} reload={true} id={project.id} />
          </Box>
        ) : null}
        {isSameEmailAndNotNullCurrentUser ? (
          <Box>
            <ProjectUpdateLinkButton x={0} y={2} id={project.id} />
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

ProjectComponent.propTypes = {
  id: PropTypes.number,
};

export default ProjectComponent;

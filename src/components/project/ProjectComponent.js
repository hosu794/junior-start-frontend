import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";
import { projectCurrentItemSelector } from "../../selectors/project.selectors";
import ProjectBackButton from "./ProjectBackButton";

const ProjectComponent = () => {
  let { name } = useParams();

  const project = useSelector(projectCurrentItemSelector);

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
      {project ? (
        <React.Fragment>
          <h1>title: {project.title}</h1>
          <p>Description: {project.description}</p>
          <hr />
          Project's Name: {project.name}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: project.body }}></div>
          <hr />
          Number of Seats: {project.numberOfSeats}
          <p>Recruting? {project.recruiting ? "Yes" : "Nope"}</p>
          Team members:{" "}
          {project.teamMembers
            ? project.teamMembers.map((i) => <p>{i.email}</p>)
            : "Nobody"}
          <p>
            Project's mentor:{" "}
            {project.mentor ? project.mentor.username : "Nobody"}
          </p>
          <hr />
          <h2>Creator: {project.creator.email}</h2>
        </React.Fragment>
      ) : (
        "Loading"
      )}
      <ProjectBackButton title="Back to projects" />
    </div>
  );
};

ProjectComponent.propTypes = {
  id: PropTypes.number,
};

export default ProjectComponent;

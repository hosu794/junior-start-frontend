import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";
import {
  projectSizeSelector,
  projectsSelector,
} from "../../selectors/project.selectors";

const ProjectItems = () => {
  const page = useSelector(projectSizeSelector);
  const content = useSelector(projectsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectActions.findAll(page));
  }, [content, dispatch, page]);

  return (
    <div>
      <h1>Projects</h1>
      {content ? content.map((i) => i.title) : null}
    </div>
  );
};

export default ProjectItems;

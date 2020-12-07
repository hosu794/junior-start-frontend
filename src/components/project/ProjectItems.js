import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";
import {
  projectPageSelector,
  projectsSelector,
} from "../../selectors/project.selectors";

const ProjectItems = () => {
  const page = useSelector(projectPageSelector);
  const content = useSelector(projectsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectActions.findAll(page));
  }, [dispatch, page]);

  return (
    <div>
      <h1>Projects</h1>
      {content
        ? content.map((i) => (
            <React.Fragment>
              <h1>{i.title}</h1>
              <p>Body: {i.body}</p>
            </React.Fragment>
          ))
        : null}
    </div>
  );
};

export default ProjectItems;

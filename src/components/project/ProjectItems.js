import debounce from "lodash.debounce";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";
import PropTypes from "prop-types";

import {
  projectErrorSelector,
  projectLastSelector,
  projectLoadingSelector,
  projectPageSelector,
  projectsSelector,
} from "../../selectors";
import { useComponentWillMount } from "../../hooks";
import ProjectItem from "./ProjectItem";

const ProjectInfinityScroll = () => {
  const projects = useSelector(projectsSelector);
  const error = useSelector(projectErrorSelector);
  const isLoading = useSelector(projectLoadingSelector);
  const hasMore = useSelector(projectLastSelector);
  const page = useSelector(projectPageSelector);

  const dispatch = useDispatch();

  const loadUsers = () => {
    dispatch(projectActions.findAll(page));
  };

  useComponentWillMount(() => loadUsers());

  window.onscroll = debounce(() => {
    if (error || isLoading || !hasMore) return;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadUsers();
    }
  }, 100);

  return (
    <div>
      <h1>Infinite Users!</h1>
      <p>Scroll down to load more!!</p>
      {projects.map((i) => (
        <Fragment key={i.id}>
          <hr />
          <div style={{ display: "flex" }}>
            <ProjectItem
              title={i.title}
              key={i.id}
              creator={i.creator}
              description={i.description}
              id={i.id}
              name={i.name}
            />
          </div>
        </Fragment>
      ))}
      <hr />
      {error && <div style={{ color: "#900" }}>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!hasMore && <div>You did it! You reached the end!</div>}
    </div>
  );
};

ProjectInfinityScroll.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  hasMore: PropTypes.bool,
  page: PropTypes.number,
};

export default ProjectInfinityScroll;

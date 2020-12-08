import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";
import {
  projectLastSelector,
  projectPageSelector,
  projectsSelector,
} from "../../selectors/project.selectors";

import InfiniteScroll from "react-infinite-scroller";

const loader = <div className="loader">Loading ...</div>;

const ProjectItems = () => {
  const page = useSelector(projectPageSelector);
  const content = useSelector(projectsSelector);
  const last = useSelector(projectLastSelector);

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const fetchAll = useCallback(() => {
    dispatch(projectActions.findAll(page));
  }, [dispatch, page]);

  return (
    <div>
      <h1>Projects</h1>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchAll}
        hasMore={!last}
        loader={loader}
      >
        <div className="tracks">
          {content
            ? content.map((i) => (
                <React.Fragment>
                  <h1>{i.title}</h1>
                  <p>{i.body}</p>
                </React.Fragment>
              ))
            : null}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProjectItems;

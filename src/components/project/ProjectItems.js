import debounce from "lodash.debounce";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";

import {
  projectErrorSelector,
  projectLastSelector,
  projectLoadingSelector,
  projectPageSelector,
  projectsSelector,
} from "../../selectors";
import { useComponentWillMount } from "../../hooks";

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
            <div>
              <h2 style={{ marginTop: 0 }}>{i.title}</h2>
              <p>Description: {i.description}</p>
            </div>
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

export default ProjectInfinityScroll;

/**
 * The old version of component
 * It has been wroten with class way.
 */

// class ProjectItems extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       error: false,
//       hasMore: true,
//       isLoading: false,
//       users: [],
//       page: 0,
//     };

//     window.onscroll = debounce(() => {
//       const {
//         loadUsers,
//         state: { error, isLoading, hasMore },
//       } = this;

//       if (error || isLoading || !hasMore) return;

//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         loadUsers();
//       }
//     }, 100);
//   }

//   componentWillMount() {
//     this.loadUsers();
//   }

//   loadUsers = () => {
//     this.setState({ isLoading: true }, () => {
//       request
//         .get(
//           `https://junior-start-backend.herokuapp.com/api/project?page=${this.state.page}`
//         )
//         .then((results) => {
//           // Creates a massaged array of user data

//           const nextProjects = results.body.content.map((user) => ({
//             title: user.title,
//             description: user.description,
//           }));

//           this.setState({
//             hasMore: !results.body.last,
//             isLoading: false,
//             users: [...this.state.users, ...nextProjects],
//             page: this.state.page + 1,
//           });

//           console.log(this.state);
//         })
//         .catch((err) => {
//           this.setState({
//             error: err.message,
//             isLoading: false,
//           });
//         });
//     });
//   };

//   render() {
//     const { error, hasMore, isLoading, users } = this.state;

//     return (
//       <div>
//         <h1>Infinite Users!</h1>
//         <p>Scroll down to load more!!</p>
//         {users.map((i) => (
//           <Fragment key={i.id}>
//             <hr />
//             <div style={{ display: "flex" }}>
//               <div>
//                 <h2 style={{ marginTop: 0 }}>{i.title}</h2>
//                 <p>Description: {i.description}</p>
//               </div>
//             </div>
//           </Fragment>
//         ))}
//         <hr />
//         {error && <div style={{ color: "#900" }}>{error}</div>}
//         {isLoading && <div>Loading...</div>}
//         {!hasMore && <div>You did it! You reached the end!</div>}
//       </div>
//     );
//   }
// }

import debounce from "lodash.debounce";
import React, { Component, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions";

import request from "superagent";

class ProjectItems extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
      page: 0,
    };

    // Binds our scroll event handler
    window.onscroll = debounce(() => {
      const {
        loadUsers,
        state: { error, isLoading, hasMore },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadUsers();
      }
    }, 100);
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, () => {
      request
        .get(
          `https://junior-start-backend.herokuapp.com/api/project?page=${this.state.page}`
        )
        .then((results) => {
          // Creates a massaged array of user data

          const nextProjects = results.body.content.map((user) => ({
            title: user.title,
            description: user.description,
          }));

          this.setState({
            hasMore: !results.body.last,
            isLoading: false,
            users: [...this.state.users, ...nextProjects],
            page: this.state.page + 1,
          });

          console.log(this.state);
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            isLoading: false,
          });
        });
    });
  };

  render() {
    const { error, hasMore, isLoading, users } = this.state;

    return (
      <div>
        <h1>Infinite Users!</h1>
        <p>Scroll down to load more!!</p>
        {users.map((i) => (
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
  }
}

export default ProjectItems;

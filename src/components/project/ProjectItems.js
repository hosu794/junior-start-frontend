import debounce from "lodash.debounce";
import React, {
  Component,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
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
          console.log(results.body.content);
          const nextUsers = results.body.content.map((user) => ({
            title: user.title,
            description: user.description,
          }));
          console.log(nextUsers);
          // Merges the next users into our existing users
          this.setState({
            // Note: Depending on the API you're using, this value may
            // be returned as part of the payload to indicate that there
            // is no additional data to be loaded
            hasMore: !results.body.last,
            isLoading: false,
            users: [...this.state.users, ...nextUsers],
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
        {users.map((user) => (
          <Fragment key={user.username}>
            <hr />
            <div style={{ display: "flex" }}>
              <div>
                <h2 style={{ marginTop: 0 }}>@{user.title}</h2>
                <p>Description: {user.description}</p>
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

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { oauth2Actions } from "../../actions";

function mapDispatchToProps(dispatch) {
  return {
    login: (token) => dispatch(oauth2Actions.login(token)),
  };
}

class OAuth2RedirectHandler extends Component {
  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const { login } = this.props;

    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");

    if (token) {
      login(token);

      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location },
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: this.props.location,
              error: error,
            },
          }}
        />
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(OAuth2RedirectHandler);

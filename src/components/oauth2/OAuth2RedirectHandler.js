import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { oauth2Actions } from "../../actions";

const OAuth2RedirectHandler = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (credential) => {
    await dispatch(oauth2Actions.login(credential));
    await history.push("/");
  };

  const handleError = async (err) => {
    await history.push("/login", {
      error: error,
    });
  };

  const getUrlParameter = (name) => {
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  if (token) {
    login(token);
    return <Redirect to="/" />;
  } else {
    handleError(error);
    return <Redirect to={{ state: { error: error }, pathname: "/" }} />;
  }
};

export default OAuth2RedirectHandler;

// function mapDispatchToProps(dispatch) {
//   return {
//     login: (token) => dispatch(oauth2Actions.login(token)),
//   };
// }

// class OAuth2RedirectHandler extends Component {
//   getUrlParameter(name) {
//     // eslint-disable-next-line no-useless-escape
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

//     var results = regex.exec(this.props.location.search);
//     return results === null
//       ? ""
//       : decodeURIComponent(results[1].replace(/\+/g, " "));
//   }

//   render() {
//     const { login } = this.props;

//     const token = this.getUrlParameter("token");
//     const error = this.getUrlParameter("error");

//     if (token) {
//       login(token);

//       return (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: this.props.location },
//           }}
//         />
//       );
//     } else {
//       return (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: {
//               from: this.props.location,
//               error: error,
//             },
//           }}
//         />
//       );
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(OAuth2RedirectHandler);

import React from "react";
import Login from "../../pages/login";

const LoginProtector = (WrappedComponent) => {
  class LoginRequired extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isUserLogedin: true,
      };
    }

    render() {
      return this.state.isUserLogedin ? <WrappedComponent /> : <Login />;
    }
  }

  return LoginRequired;
};

export default LoginProtector;

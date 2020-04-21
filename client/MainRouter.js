import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class MainRouter extends Component {
  constructor({ data }) {
    super();
    this.data = data;
  }

  /**
   * Removes the server-side injected CSS when React component mounts
   */
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signin} />
      </Switch>
    );
  }
}

export default MainRouter;

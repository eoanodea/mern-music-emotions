import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

/**
 * Components
 */

import Loading from "./components/global/Loading";
import Error from "./components/global/Error";
import Header  from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/**
 * Pages
 */
import Home from "./pages/Home";

type IProps = {
  data?: object;
};

type IState = {
  ssrComplete: boolean;
  online: boolean;
};

class MainRouter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ssrComplete: false,
      online: false,
    };
  }

  /**
   * Removes the server-side injected CSS when React component mounts
   */
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    this.setState({ ssrComplete: true, online: navigator.onLine });
  }

  render() {
    const { ssrComplete, online } = this.state;

    if (!ssrComplete) return <Loading />;
    if (!online) return <Error message="Not connected to server" />;

    return (
      <React.Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default MainRouter;

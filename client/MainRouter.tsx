import React, { Component } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

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
import ListTracks from "./components/track/List"
import CreateTrack from "./components/track/Create"
import ShowTrack from "./components/track/Show"
import UpdateTrack from "./components/track/Update"

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

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
          <Route path="/tracks" component={ListTracks} />
          <Route path="/track/new" component={CreateTrack} />
          <Route path="/track/show/:id" render={(props) => (
            <ShowTrack id={props.match.params.id} history={props.history}/>
          )} />
          <Route path="/track/edit/:id" render={(props) => (
            <UpdateTrack id={props.match.params.id} history={props.history} />
          )} />
        

        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default MainRouter;

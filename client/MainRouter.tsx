import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

type IProps = {
  data?: object
}

type IState = {
  ssrComplete: boolean,
  online: boolean
}

class MainRouter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ssrComplete: false,
      online: false,
    };
    if(props.data) {
      console.log(typeof props.data)
      
    }
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
    
    if (!ssrComplete) return <h2>Loading...</h2>;

    return (
      <h2>{online ? "Hello react typescript" : "offline"}</h2>
      // <Switch>
      //   <Route exact path="/" component={Signin} />
      // </Switch>
    );
  }
}

export default MainRouter;

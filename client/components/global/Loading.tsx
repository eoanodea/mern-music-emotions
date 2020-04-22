/**
 * Primary dependencies
 */
import React, { Component } from "react";

/**
 * Component Library imports
 */
import { CircularProgress } from "@material-ui/core";

/**
 * Renders an Activity Indicator
 *  for the application
 */
class Loading extends Component {
  render() {
    return <CircularProgress />;
  }
}

export default Loading;

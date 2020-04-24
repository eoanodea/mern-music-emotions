/**
 * Primary dependencies
 */
import React, { Component } from "react";

/**
 * Component Library imports
 */
import { CircularProgress, withStyles, Theme, createStyles } from "@material-ui/core";

type IProps = {
  classes: {
    progressWrapper: string
  }
}

const styles = ({ palette }: Theme ) => createStyles({
  progressWrapper: {
    minHeight: '-webkit-fill-available',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

/**
 * Renders an Activity Indicator
 *  for the application
 */
class Loading extends Component<IProps> {
  render() {
    const {classes} = this.props
    return <div className={classes.progressWrapper}><CircularProgress /></div>;
  }
}

export default withStyles(styles)(Loading);

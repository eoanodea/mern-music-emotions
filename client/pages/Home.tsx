/**
 * Primary dependencies
 */
import React, { Component } from "react";

/**
 * Component Library imports
 */
import { Typography, Paper, withStyles, createStyles, Theme, Button } from "@material-ui/core";
import { Audiotrack, ArrowRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

type IProps = {
  classes: {
    wrapper: string;
  }
}

const styles = ({  spacing }: Theme) => createStyles({
  wrapper: {
    padding: spacing(4),
    textAlign: 'center'
  }
})

/**
 * Homepage for the application
 */
class Home extends Component<IProps> {
  render() {
    const {classes} = this.props
    return (
      <Paper elevation={3} className={classes.wrapper}>
        <Typography variant="h4">
          <Audiotrack fontSize="large" color="primary" />
        </Typography>
        <Typography variant="h3">Emotune</Typography>
        <br />
        <Button color="secondary" variant="contained" endIcon={<ArrowRight />} component={Link} to="/tracks">Get Started</Button>   
      </Paper>
    )
  }
}

export default withStyles(styles)(Home);

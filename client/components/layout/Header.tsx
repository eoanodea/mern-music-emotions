/**
 * Primary dependencies
 */
import React, { Component } from "react";

/**
 * Component Library imports
 */
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * Header for the application
 */
class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6">Title</Typography>
          </Link>

          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/tracks">Tracks</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;

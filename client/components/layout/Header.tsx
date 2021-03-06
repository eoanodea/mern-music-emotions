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
        <Toolbar style={{justifyContent: 'space-between'}}>
          <Button component={Link} to="/">Emotune</Button>

          <div>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/tracks">Tracks</Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;

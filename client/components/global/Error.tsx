/**
 * Primary dependencies
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

/**
 * Component Library imports
 */

type IProps = {
  message?: String;
};

/**
 * Renders an Error
 *  for the application
 */

const Error = ({ message }: IProps) => (
  <React.Fragment>
    <h2>Error {message ? message : ""}</h2>
    <Button component={Link} to="/" color="primary" variant="contained">Home</Button>
  </React.Fragment>
)

export default Error


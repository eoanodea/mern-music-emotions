/**
 * Primary dependencies
 */
import React, { Component } from "react";

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
    <h2>Error {message ? message : ""}</h2>
)

export default Error


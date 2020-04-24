/*
 * File: List.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: List all tracks from the database
 * Last Modified: Wednesday, 22nd April 2020 7:08:22 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { list } from "./api-track";
import Error from "../global/Error";
import Loading from "../global/Loading";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardHeader,
} from "@material-ui/core";
import MuiList from "@material-ui/core/List";
import { Audiotrack, Add } from "@material-ui/icons";

type ITrack = {
  _id: string;
  title: string;
  created: Date;
};

type IState = {
  tracks: ITrack[];
  loading: boolean;
  error: string;
};

class List extends Component<IState> {
  state: { tracks: ITrack[]; loading: boolean; error: string } = {
    tracks: [],
    loading: true,
    error: "",
  };

  componentDidMount() {
    this.init();
  }

  /**
   * Run the fetch tracks function
   */
  init = () => {
    list().then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else this.setState({ loading: false, tracks: data.data });
    });
  };

  render() {
    const { loading, tracks, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <span>
        <CardHeader
          title={"Tracks"}
          action={
            <Button
              component={Link}
              endIcon={<Add />}
              to="/track/new"
              variant="contained"
              color="primary"
            >
              Add Track
            </Button>
          }
        />
        <MuiList>
          {tracks.length > 0 ? (
            tracks.map((dat, i) => {
              return (
                <ListItem
                  key={i}
                  button
                  component={Link}
                  to={`/track/show/${dat._id}`}
                >
                  <ListItemIcon>
                    <Audiotrack />
                  </ListItemIcon>
                  <ListItemText primary={dat.title} secondary={dat.created} />
                </ListItem>
              );
            })
          ) : (
            <ListItem>
              <ListItemText primary="No Tracks Available"/>
            </ListItem>
          )}
        </MuiList>
      </span>
    );
  }
}

export default List;

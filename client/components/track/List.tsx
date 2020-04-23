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
import { Button, Card, CardActions, Typography, CardActionArea } from "@material-ui/core";

type ITrack = {
    _id: string
    title: string,
    data: Buffer
}

type IState = {
  tracks: ITrack[];
  loading: boolean;
  error: string;
};

class List extends Component<IState> {
  state: { tracks: ITrack[], loading: boolean, error: string } = {
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
      <div>
        <h2>List Tracks</h2>
        <Button 
            component={Link} 
            to="/track/new"
            variant="contained"
            color="primary"
        >Add Track</Button>
        <br />
        {tracks.map((dat, i) => {
            return (
                <Card key={i}>
                    <Link to={`/track/show/${dat._id}`}>
                    <CardActionArea>
                        <Typography variant="h5">{dat.title}</Typography>
                    </CardActionArea>

                    </Link>
                </Card>
            )
        })}
      </div>
    );
  }
}

export default List;

/*
 * File: Show.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Show a single track
 * Last Modified: Wednesday, 22nd April 2020 11:03:13 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { show } from "./api-track";
import Error from "../global/Error";
import Loading from "../global/Loading";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardActionArea,
} from "@material-ui/core";

type ITrack = {
    _id: string;
  title: string;
};

type IState = {
  track: ITrack;
  loading: boolean;
  error: string;
};

type IProps = {
    id: string 
}


class Show extends Component<IProps,IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            track: {
                _id: "",
                title: ""
            },
            loading: true,
            error: "",
          };
    }

  componentDidMount() {
    this.init();
  }

  /**
   * Run the fetch track function
   */
  init = () => {
    const { id } = this.props;
    show(id).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else this.setState({ loading: false, track: data.data });
    });
  };

  render() {
    const { loading, track, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <div>
        <h2>Show Track</h2>

        <Card>
          <CardActionArea>
            <Typography variant="h5">{track.title}</Typography>
          </CardActionArea>
        <audio controls>
            <source src={`/api/track/audio/${track._id}`} />
            Your browser does not support the audio element.
        </audio>
        </Card>
      </div>
    );
  }
}

export default Show;

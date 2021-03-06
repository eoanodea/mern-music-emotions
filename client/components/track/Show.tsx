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
import { History } from "history";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton
} from "@material-ui/core";
import Delete from "./Delete";
import AudioPlayer from "../audio/AudioPlayer";
import { Edit, ArrowLeft, ArrowBack } from "@material-ui/icons";

type ITrack = {
  _id: string;
  title: string;
};

type IState = {
  track: ITrack;
  loading: boolean;
  error: string;
  duration: number;
};

type IProps = {
  id: string;
  history: History;
  data?: any;
};


class Show extends Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      track: {
        _id: "",
        title: "",
      },
      loading: true,
      error: "",
      duration: 0,
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
      if (data.error || !data.data)
        this.setState({
          loading: false,
          error: data.error ? data.error : "No Track Found",
        });
      else {
        this.setState({ loading: false, track: data.data });
      }
    });
  };

  /**
   * Loads track from the server
   */
  renderSSRData = (data: ITrack) => {
    this.setState({ track: data });
  };

  render() {
    /**
     * Render server side rendered data
     */
    if (
      this.props.data &&
      this.props.data[0] != null &&
      this.state.track.title === ""
    ) {
      this.renderSSRData(this.props.data[0]);
    }

    const { loading, track, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <Card>
        <IconButton component={Link} to={`/tracks`}><ArrowBack /></IconButton>
        <CardHeader
          title={track.title}
          action={
            <span>
              <IconButton
                component={Link}
                to={`/track/edit/${track._id}`}
                color="primary"
              >
                <Edit />
              </IconButton>
              <Delete id={track._id} history={this.props.history} />
            </span>
          }
        />

        <CardContent style={{textAlign: 'center'}}>
          {track._id !== "" && <AudioPlayer id={track._id} />}
        </CardContent>
      </Card>
    );
  }
}

export default Show;

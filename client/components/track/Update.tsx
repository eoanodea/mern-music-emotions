/*
 * File: Update.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description:
 * Last Modified: Thursday, 23rd April 2020 2:29:51 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { show, update } from "./api-track";
import Error from "../global/Error";
import Loading from "../global/Loading";
import { History } from "history";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardActionArea,
  CardHeader,
  CardContent,
  TextField,
  CircularProgress,
} from "@material-ui/core";

type ITrack = {
  [key: string]: any;
  _id: string;
  title: string;
};

type IState = {
  track: ITrack;
  loading: boolean;
  error: string;
};

type IProps = {
  id: string;
  history: History
};

class Update extends Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      track: {
        _id: "",
        title: "",
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

  setLoading = (loading: boolean) => this.setState({ loading });

  handleChange = (name: string) => (event: any) => {
    let { track } = this.state;
    track[name] = event.target.value;

    this.setState({ track });
  };

  /**
   * Submit the updated track
   */
  submit = () => {
    this.setLoading(true);
    const { id } = this.props;

    update(id, this.state.track).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else {
        this.setLoading(false);
        
        this.props.history.push(`/track/show/${data.data._id}`);
      }
    });
  };

  render() {
    const { loading, track, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <Card>
        <CardHeader title="Upload a new track" />
        <CardContent>
          <form noValidate autoComplete="off">
            <TextField
              label="Track Name"
              value={track.title}
              onChange={this.handleChange("title")}
            />
          </form>
        </CardContent>
        <CardActions>
            <Button
                variant="contained" 
                color="primary" 
                onClick={this.submit} 
                disabled={loading || track.title === ""}
                endIcon={loading && <CircularProgress size={18} color="secondary" />}
            >Save</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Update;

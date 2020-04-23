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
import { show, update } from "./api-reaction";
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

type IReaction = {
  [key: string]: any;
  _id: string;
  title: string;
};

type IState = {
  reaction: IReaction;
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
      reaction: {
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
   * Run the fetch reaction function
   */
  init = () => {
    const { id } = this.props;
    show(id).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else this.setState({ loading: false, reaction: data.data });
    });
  };

  setLoading = (loading: boolean) => this.setState({ loading });

  handleChange = (name: string) => (event: any) => {
    let { reaction } = this.state;
    reaction[name] = event.target.value;

    this.setState({ reaction });
  };

  /**
   * Submit the updated reaction
   */
  submit = () => {
    this.setLoading(true);
    const { id } = this.props;

    update(id, this.state.reaction).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else {
        this.setLoading(false);
        
        this.props.history.push(`/reaction/show/${data.data._id}`);
      }
    });
  };

  render() {
    const { loading, reaction, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <Card>
        <CardHeader title="Upload a new reaction" />
        <CardContent>
          <form noValidate autoComplete="off">
            <TextField
              label="Reaction Name"
              value={reaction.title}
              onChange={this.handleChange("title")}
            />
          </form>
        </CardContent>
        <CardActions>
            <Button
                variant="contained" 
                color="primary" 
                onClick={this.submit} 
                disabled={loading || reaction.title === ""}
                endIcon={loading && <CircularProgress size={18} color="secondary" />}
            >Save</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Update;

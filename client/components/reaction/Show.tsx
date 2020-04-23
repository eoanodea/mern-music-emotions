/*
 * File: Show.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Show a single reaction
 * Last Modified: Wednesday, 22nd April 2020 11:03:13 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { show } from "./api-reaction";
import Error from "../global/Error";
import Loading from "../global/Loading";
import { Link } from "react-router-dom";
import { History } from "history";
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardActionArea,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import Delete from "./Delete";

type IReaction = {
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
  history: History;
  data?: any
};

class Show extends Component<IProps, IState> {
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
      if (data.error || !data.data) this.setState({ loading: false, error: data.error ? data.error : "No Reaction Found" });
      else this.setState({ loading: false, reaction: data.data });
    });
  };

  renderSSRData = (data: IReaction) => {
    console.log('SSR DATA!!!', data)
    this.setState({reaction: data})
  }

  render() {
    /**
     * Render server side rendered data
     */
    if (
      this.props.data 
      && this.props.data[0] != null
      && this.state.reaction.title === "") {
        this.renderSSRData(this.props.data[0])
      
    }

    const { loading, reaction, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <Card>
        <CardHeader
          title={"Show Reaction"}
          action={
            <React.Fragment>
            <Button
              component={Link}
              to={`/reaction/edit/${reaction._id}`}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Delete id={reaction._id} history={this.props.history} />
            </React.Fragment>
          }
        />

        <CardContent>
          <Typography variant="h5">{reaction.title}</Typography>

          <audio controls>
            <source src={`/api/reaction/audio/${reaction._id}`} />
            Your browser does not support the audio element.
          </audio>
        </CardContent>
      </Card>
    );
  }
}

export default Show;

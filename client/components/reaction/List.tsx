/*
 * File: List.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: List all reactions from the database
 * Last Modified: Wednesday, 22nd April 2020 7:08:22 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { list } from "./api-reaction";
import Error from "../global/Error";
import Loading from "../global/Loading";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, Typography, CardActionArea } from "@material-ui/core";

type IReaction = {
    _id: string
    title: string,
    data: Buffer
}

type IState = {
  reactions: IReaction[];
  loading: boolean;
  error: string;
};

class List extends Component<IState> {
  state: { reactions: IReaction[], loading: boolean, error: string } = {
    reactions: [],
    loading: true,
    error: "",
  };

  componentDidMount() {
    this.init();
  }

  /**
   * Run the fetch reactions function
   */
  init = () => {
    list().then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else this.setState({ loading: false, reactions: data.data });
    });
  };

  render() {
    const { loading, reactions, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <div>
        <h2>List Reactions</h2>
        <Button 
            component={Link} 
            to="/reaction/new"
            variant="contained"
            color="primary"
        >Add Reaction</Button>
        <br />
        {reactions.map((dat, i) => {
            return (
                <Card key={i}>
                    <Link to={`/reaction/show/${dat._id}`}>
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

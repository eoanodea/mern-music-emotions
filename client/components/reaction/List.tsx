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
import moment from "moment";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Grow,
  ListSubheader,
} from "@material-ui/core";
import MuiList from "@material-ui/core/List";
import { SentimentVerySatisfied, SentimentDissatisfied, SentimentVeryDissatisfiedOutlined, SentimentVeryDissatisfied } from "@material-ui/icons";

type IReaction = {
    _id: string
    time: number,
    emotion: string,
    created: Date
}

type IProp = {
  id: string
  handleAudioJump: (seconds: number) => void;
}

type IState = {
  reactions: IReaction[];
  loading: boolean;
  error: string;
};

class List extends Component<IProp, IState> {
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
    const {id} = this.props
    list(id).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else this.setState({ loading: false, reactions: data.data });
    });
  };

  displayReactionIcon = (reaction:string) => {
    switch(reaction) {
      case "Happy":
        return <SentimentVerySatisfied color="secondary" />
      case "Sad":
        return <SentimentVeryDissatisfied color="secondary" />
      case "Fear":
        return <SentimentVeryDissatisfiedOutlined color="secondary" />
      default:
        return <SentimentDissatisfied color="secondary" />
    }
  }

  formatAudioTime(seconds: number) {
    return moment.utc(seconds * 1000).format("mm:ss");
  }

  handleClickSeek = (time: any) => (event:any) => {
    this.props.handleAudioJump(time)
  }

  render() {
    const { loading, reactions, error } = this.state;

    if (loading) return <Loading />;
    if (error !== "") return <Error message={error} />;

    return (
      <span>
        <MuiList>
          <ListSubheader style={{textAlign: 'left'}}>
            Reactions
          </ListSubheader>
          {reactions.length > 0 ? (
            reactions.map((dat, i) => {
              return (
                <Grow in={true} timeout={500 * i} key={i}>
                  <ListItem
                    button
                    onClick={this.handleClickSeek(dat.time)}
                  >
                    <ListItemIcon>
                      {this.displayReactionIcon(dat.emotion)}
                    </ListItemIcon>
                    <ListItemText primary={this.formatAudioTime(dat.time) + " - " + dat.emotion} secondary={moment(dat.created).format("dddd, MMMM Do YYYY, h:mm:ss a")} />
                  </ListItem>
                </Grow>
              );
            })
          ) : (
            <ListItem>
              <ListItemText primary="No reactions have been made"/>
            </ListItem>
          )}
        </MuiList>
      </span>
    );
  }
}

export default List;

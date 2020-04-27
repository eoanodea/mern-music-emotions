/*
 * File: Create.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Create a new reaction
 * Last Modified: Wednesday, 22nd April 2020 7:24:29 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { create } from "./api-reaction";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  createStyles,
  withStyles,
  Theme,
  Typography,
  Icon,
  CardActions,
  CircularProgress,
  Grid,
  Grow,
  Paper,
} from "@material-ui/core";
import {
  SentimentVerySatisfied,
  SentimentVeryDissatisfiedOutlined,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  CheckCircle,
  Error,
} from "@material-ui/icons";
import ReactionCard from "./ReactionCard";

const styles = ({ breakpoints, spacing }: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    error: {
      verticalAlign: "middle",
    },
    selectedItem: {
      textAlign: "center",
    },
    reactionPaper: {
      padding: spacing(4),
      textAlign: "center",
      margin: "0 auto",
      [breakpoints.down('xs')]: {
        maxWidth: "100%"
      }
    },
  });

type IProps = {
  id: string;
  time: number;
  classes: {
    input: string;
    error: string;
    selectedItem: string;
    reactionPaper: string;
  };
};

type IState = {
  reaction: {
    [key: string]: any;
    time: number;
    emotion: string;
  };
  loading: boolean;
  error: string;
  success: boolean;
};

const reactions = [
  {
    name: "Happy",
    icon: <SentimentVerySatisfied color="secondary" fontSize="large" />,
  },
  {
    name: "Sad",
    icon: <SentimentVeryDissatisfied color="secondary" fontSize="large" />,
  },
  {
    name: "Fear",
    icon: (
      <SentimentVeryDissatisfiedOutlined color="secondary" fontSize="large" />
    ),
  },
  {
    name: "Anger",
    icon: <SentimentDissatisfied color="secondary" fontSize="large" />,
  },
];

class Create extends Component<IProps, IState> {
  reactionData!: FormData;
  constructor(props: IProps) {
    super(props);
    this.state = {
      reaction: {
        time: 0,
        emotion: "",
      },
      loading: false,
      error: "",
      success: false,
    };
  }

  /**
   * Toggle loading
   */
  setLoading = (loading: boolean) => this.setState({ loading });

  /**
   * Submit the newely uploaded reaction
   */
  submit = () => {
    this.setLoading(true);
    let { reaction } = this.state;
    reaction.track = this.props.id;
    create(reaction).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else {
        this.setState({ loading: false, success: true });
      }
    });
  };

  /**
   * When a reaction has been selected
   */
  onSelectReaction = (name: string) => {
    let { reaction } = this.state;
    reaction.emotion = name;
    reaction.time = this.props.time;
    this.setState({ reaction });
  };

  /**
   * Reset the reaction picker to it's initial state
   */
  resetSelection = () => {
    let { reaction } = this.state;
    reaction.emotion = "";
    this.setState({ reaction, success: false });
  };

  render() {
    const { classes } = this.props;
    const { success, reaction, loading, error } = this.state;
    if (success)
      return (
        <Grow in={true}>
          <Paper elevation={2} className={classes.reactionPaper}>
            <Typography variant="h4">
              <CheckCircle color="primary" fontSize="large" />
            </Typography>
            <Typography variant="h5">Reaction Saved</Typography>
            <br />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.resetSelection}
            >
              Pick Another
            </Button>
          </Paper>
        </Grow>
      );

    return (
      <div>
        <CardHeader title="Select a reaction" />
        <CardContent>
          <Grid container justify="space-evenly" spacing={3}>
            {reaction.emotion !== "" ? (
              <Grid item xs={10} sm={6} className={classes.selectedItem}>
                <ReactionCard
                  reactionPaper={classes.reactionPaper}
                  onSelect={this.onSelectReaction}
                  index={2}
                  reaction={
                    reactions.filter((dat) => dat.name === reaction.emotion)[0]
                  }
                />
                <br />
                <Button
                  onClick={this.resetSelection}
                  variant="contained"
                  color="secondary"
                >
                  Select Again
                </Button>
              </Grid>
            ) : (
              reactions.map((dat, i) => {
                return (
                  <Grid key={i} item xs={12} sm={5}>
                    <ReactionCard
                      reactionPaper={classes.reactionPaper}
                      onSelect={this.onSelectReaction}
                      index={i}
                      reaction={dat}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>

          <br />
          {error !== "" && (
            <Typography component="p" color="error" style={{textAlign: 'center'}}>
              <Error color="error" className={classes.error} />
              {error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.submit}
            disabled={loading || reaction.emotion === ""}
            endIcon={
              loading && <CircularProgress size={18} color="secondary" />
            }
          >
            Save
          </Button>
        </CardActions>
      </div>
    );
  }
}

export default withStyles(styles)(Create);

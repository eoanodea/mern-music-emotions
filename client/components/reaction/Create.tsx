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
} from "@material-ui/core";
import {
  SentimentVerySatisfied, 
  SentimentVeryDissatisfiedOutlined,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
} from "@material-ui/icons";
import ReactionCard from "./ReactionCard";

const styles = ({ palette }: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    error: {
      verticalAlign: "middle",
    },
    selectedItem: {
      textAlign: 'center'
    }
  });

type IProps = {
  classes: {
    input: string;
    error: string;
    selectedItem: string;
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
};

const reactions = [
  {
    name: "Happy",
    icon: <SentimentVerySatisfied color="secondary" fontSize="large" />
  },
  {
    name: "Sad",
    icon: <SentimentVeryDissatisfied color="secondary" fontSize="large" />
  },
  {
    name: "Fear",
    icon: <SentimentVeryDissatisfiedOutlined color="secondary" fontSize="large" />
  },
  {
    name: "Anger",
    icon: <SentimentDissatisfied color="secondary" fontSize="large" />
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
    };
  }

  componentDidMount() {
    this.reactionData = new FormData();
  }

  setLoading = (loading: boolean) => this.setState({ loading });

  handleChange = (name: string) => (event: any) => {
    let { reaction } = this.state;
    reaction[name] = event.target.value;

    this.setState({ reaction });
  };

  /**
   * Submit the newely uploaded reaction
   */
  submit = () => {
    this.setLoading(true);
    create(this.state.reaction).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else {
        this.setLoading(false);
        console.log("success!", data);
      }
    });
  };

  onSelectReaction = (name: string) => {
    let {reaction} = this.state
    reaction.emotion = name
    this.setState({reaction})
  }

  resetSelection = () => {
    let {reaction} = this.state
    reaction.emotion = ""
    this.setState({reaction})
  }

  render() {
    const { classes } = this.props;
    const { reaction, loading, error } = this.state;
    return (
      <Card>
        <CardHeader title="Select a reaction" />
        <CardContent>
          <Grid container justify="space-evenly" spacing={3}>
            {
            reaction.emotion !== ""
            ? (
              <Grid item xs={12} sm={5} className={classes.selectedItem}>
                  <ReactionCard onSelect={this.onSelectReaction} index={2} reaction={reactions.filter(dat => dat.name === reaction.emotion)[0]} />
                  <br />
                  <Button onClick={this.resetSelection} variant="contained" color="secondary">Select Again</Button>
              </Grid>
            )
            : reactions.map((dat, i) => {
              return <Grid key={i} item xs={12} sm={5}><ReactionCard onSelect={this.onSelectReaction} index={i} reaction={dat} /></Grid>;
            })}
          </Grid>

          <br />
          {error !== "" && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
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
      </Card>
    );
  }
}

export default withStyles(styles)(Create);

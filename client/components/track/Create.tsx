/*
 * File: Create.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Create a new track
 * Last Modified: Wednesday, 22nd April 2020 7:24:29 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { create } from "./api-track";
import { History } from "history";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  withStyles,
  createStyles,
  Theme,
  Typography,
  Icon,
  CardActions,
  CircularProgress,
  FormHelperText,
  Grow,
} from "@material-ui/core";
import { Audiotrack, Error } from "@material-ui/icons";

const styles = ({ spacing }: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    error: {
      verticalAlign: "middle",
      textAlign: 'center'
    },
    inputContainer: {
      display: "flex",
      justifyContent: "center",
      margin: `${spacing(2)}px auto`,
      flexDirection: "column",
      textAlign: "center",
      "& p": {
        textAlign: "center",
      },
    },
  });

type IProps = {
  history: History;
  classes: {
    input: string;
    error: string;
    inputContainer: string;
  };
};

type IState = {
  track: {
    [key: string]: any;
    title: string;
    data: {
      name: string;
    };
  };
  loading: boolean;
  error: string;
};

class Create extends Component<IProps, IState> {
  trackData!: FormData;
  constructor(props: IProps) {
    super(props);
    this.state = {
      track: {
        title: "",
        data: {
          name: "",
        },
      },
      loading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.trackData = new FormData();
  }

  /**
   * Toggle oading
   */
  setLoading = (loading: boolean) => this.setState({ loading });

  /**
   * Handles the binding of the input value and file upload
   */
  handleChange = (name: string) => (event: any) => {
    const value = name === "data" ? event.target.files[0] : event.target.value;
    let { track } = this.state;
    track[name] = value;

    this.trackData.set(name, value);
    this.setState({ track });
  };

  /**
   * Submit the newely uploaded track
   */
  submit = () => {
    this.setLoading(true);
    create(this.trackData).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else {
        this.setLoading(false);
        this.props.history.push("/tracks");
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { track, loading, error } = this.state;
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
            <div className={classes.inputContainer}>
              <input
                accept="audio/*"
                type="file"
                id="upload-track"
                className={classes.input}
                onChange={this.handleChange("data")}
              />
              <label htmlFor="upload-track">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  endIcon={<Audiotrack />}
                >
                  Select File
                </Button>
                <FormHelperText>Max: 6MB</FormHelperText>
              </label>
              {track.data.name !== "" && (
                <Grow in={true} timeout={1000}>
                  <Typography variant="caption">{track.data.name}</Typography>
                </Grow>
              )}
            </div>
          </form>
          <br />
          {this.state.error !== "" && (
            <Typography component="p" color="error" style={{textAlign: 'center'}}>
              <Error color="error" className={classes.error} />
              {this.state.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.submit}
            disabled={loading || track.title === "" || track.data.name === ""}
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

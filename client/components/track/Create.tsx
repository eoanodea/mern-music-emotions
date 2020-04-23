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
  FormHelperText
} from "@material-ui/core";
import { Audiotrack } from "@material-ui/icons";

const styles = ({ palette }: Theme ) => createStyles({
    input: {
        display: 'none'
    },
    error: {
        verticalAlign: "middle"
    }
})

type IProps = {
  history: History;
  classes: {
      input: string;
      error: string;
  }
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
            name: ""
        },
      },
      loading: false,
      error: "",
    };
  }

  componentDidMount() {
      this.trackData = new FormData()
  }

  setLoading = (loading: boolean) => this.setState({loading})

  handleChange = (name: string) => (event: any) => {
    const value = name === "data"
    ? event.target.files[0]
    : event.target.value
    console.log(value)
    let {track} = this.state
    track[name] = value
    
    this.trackData.set(name, value)
    this.setState({track})
  }

  /**
   * Submit the newely uploaded track
   */
  submit = () => {
    this.setLoading(true)
    create(this.trackData).then((data) => {
      if (data.error) this.setState({ loading: false, error: data.error });
      else {
        this.setLoading(false)
        console.log("success!", data);
        this.props.history.push("/tracks");
      }
    });
  };

  render() {
    const {classes} = this.props
    const {track, loading, error} = this.state
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
            {track.data.name !== "" && 
                <Typography variant="caption">
                    {track.data.name}
                </Typography>
            }
          </form>
          <br />
        {this.state.error !== "" && (
            <Typography component="p" color="error">
            <Icon color="error" className={classes.error}>
                error
            </Icon>
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
                endIcon={loading && <CircularProgress size={18} color="secondary" />}
            >Save</Button>
        </CardActions>

      </Card>
    );
  }
}

export default withStyles(styles)(Create);

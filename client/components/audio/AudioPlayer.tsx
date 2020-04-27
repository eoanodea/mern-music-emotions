/*
 * File: AudioPlayer.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Thursday, 23rd April 2020 9:36:20 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description:
 * Last Modified: Friday, 24th April 2020 12:17:08 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import {
  Slider,
  Typography,
  Button
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Controls } from "./Controls";
import moment from "moment";
import { PlayArrow } from "@material-ui/icons";
import TabController from "../tabs/TabController";

type IProps = {
  id: string;
};

type IState = {
  duration: number;
  currentTime: number;
  playing: boolean;
  isActive: boolean;
  tab: number;
  ios: boolean;
  safari: boolean;
};

class AudioPlayer extends Component<IProps, IState> {
  audioRef: any;
  currentTimeInterval: any;
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      duration: 0,
      currentTime: 0,
      playing: false,
      isActive: true,
      tab: 0,
      //@ts-ignore
      ios: process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent),
      //@ts-ignore
      safari: /constructor/i.test(window.HTMLElement) ||(function (p) {return p.toString() === "[object SafariRemoteNotification]";})(!window["safari"] ||(typeof safari !== "undefined" && safari.pushNotification)),
    };

    this.audioRef = React.createRef<HTMLAudioElement>();
    this.currentTimeInterval = null;
  }

  /**
   * run initializeAudioPlayer function
   * when the component mounts
   */
  componentDidMount() {
    if (this.state.ios || this.state.safari) {
      this.setState({ isActive: false });
    } else this.initializeAudioPlayer();
  }

  componentWillUnmount = () => {
    !this.audioRef.paused && this.audioRef.pause()
    this.audioRef = null
  }

  /**
   * IOS & Safari only
   * Manual load must be triggered
   * by the user in order to stream the audio
   */
  setActive = () => {
    if (this.audioRef) {
      this.audioRef.load();
      this.setState({ isActive: true });
      this.initializeAudioPlayer();
    }
  };

  /**
   * Controls and listeners for the audio and range input
   */
  initializeAudioPlayer = () => {
    /**
     * Sync slider position with song current time
     */
    this.audioRef.onplay = () => {
      this.setState({ playing: true, duration: this.audioRef.duration });
      this.currentTimeInterval = setInterval(() => {
        this.setState({ currentTime: this.audioRef.currentTime });
      }, 100);
    };

    /**
     * On pause of the audio, clear the interval,
     * and set the current time to 0
     */
    this.audioRef.onpause = () => {
      clearInterval(this.currentTimeInterval);
      this.setState({ playing: false });
    };

    /**
     * Get duration of the audio and set it as max slider value
     */
    this.audioRef.ondurationchange = () => {
      this.setState({ duration: this.audioRef.duration });
    };
  };

  /**
   * Seek functionality for the slider
   */
  handleSliderChange = (e: React.ChangeEvent<any>, value: any) => {
    if (this.audioRef) {
      this.audioRef.currentTime = value;
      this.setState({ currentTime: this.audioRef.currentTime });
    }
  };

  /**
   * Play the current audio file
   */
  handlePlay = () => {
    if (this.audioRef) {
      !this.audioRef.paused ? this.audioRef.pause() : this.audioRef.play();
    }
  };

  /**
   * Stop the current audio file
   */
  handleStop = () => {
    if (this.audioRef) {
      this.audioRef.pause();
      this.audioRef.currentTime = 0;
      this.setState({ currentTime: 0 });
    }
  };

  /**
   * Handles the formatting of seconds into a readable format
   * 
   * @param {number} seconds 
   */
  formatAudioTime(seconds: number) {
    return moment.utc(seconds * 1000).format("mm:ss");
  }

  /**
   * Handles jumping to a certain point in the audio from
   * clicking a reaction time
   * 
   * @param {number} seconds
   */
  handleAudioTimeJump = (seconds: number) => {
    if (this.audioRef) {
      !this.audioRef.paused && this.audioRef.pause();
      this.audioRef.currentTime = seconds;
      this.setState({ currentTime: seconds });
      window.scrollTo(0, 0);
      this.audioRef.play();
    }
  }

  render() {
    const { id } = this.props;
    const { isActive, currentTime, duration, playing } = this.state;
    const src = `/api/track/audio/${id}`;

    return (
      <React.Fragment>
        <audio
          ref={(input) => {
            this.audioRef = input;
          }}
          src={src}
          controls={isActive && (this.state.ios || this.state.safari)}
        />
        {!isActive ? (
          <Button
            variant="contained"
            endIcon={<PlayArrow />}
            color="primary"
            onClick={this.setActive}
          >
            Play Track
          </Button>
        ) : (
          <React.Fragment>
            {!this.state.ios && !this.state.safari ? (
              <React.Fragment>
                <Slider
                  value={currentTime}
                  min={0}
                  max={duration}
                  valueLabelDisplay="auto"
                  valueLabelFormat={this.formatAudioTime}
                  onChange={this.handleSliderChange}
                />
                <Typography style={{ textAlign: "center" }} variant="caption">
                  {this.formatAudioTime(currentTime) +
                    (typeof duration === "number"
                      ? " / " + this.formatAudioTime(duration)
                      : "")}
                </Typography>
                <Controls
                  playing={playing}
                  currentTime={currentTime}
                  onPlay={this.handlePlay}
                  onStop={this.handleStop}
                />
              </React.Fragment>
            ) : (
              <Alert severity="warning" style={{ textAlign: "left" }}>
                Audio playback has not been optimized for{" "}
                {this.state.ios ? "iPhone" : "Safari"}
                <br />
                For the best experience, open this application{" "}
                {this.state.ios ? "on a computer" : "on Google Chrome"}
              </Alert>
            )}
            <TabController id={id} currentTime={currentTime} handleAudioJump={this.handleAudioTimeJump} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default AudioPlayer;

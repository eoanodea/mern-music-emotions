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
import { Slider } from "@material-ui/core";
import { Controls } from "./Controls";

type IProps = {
  src: string;
};

type IState = {
  duration: number;
  currentTime: number;
  playing: boolean;
};

class AudioPlayer extends Component<IProps, IState> {
  audioRef: any;
  currentTimeInterval: any;
  sliderRef: any;
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      duration: 0,
      currentTime: 0,
      playing: false
    };

    this.audioRef = React.createRef<HTMLAudioElement>();
    this.sliderRef = React.createRef<HTMLInputElement>();
    this.currentTimeInterval = null;
  }

  /**
   * run initializeAudioPlayer function
   * when the component mounts
   */
  componentDidMount() {
    this.initializeAudioPlayer();
  }

  /**
   * Controls and listeners for the audio and range input
   */
  initializeAudioPlayer = () => {

    /**
     * Sync slider position with song current time
     */
    this.audioRef.onplay = () => {
      this.setState({playing: true})
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
      this.setState({playing: false})
    };

    /**
     * Get duration of the audio and set it as max slider value
     */
    this.audioRef.ondurationchange = () => {
      console.log('duration change!', this.audioRef.duration)
      this.setState({ duration: this.audioRef.duration });
    };

  };

  /**
   * Seek functionality for the slider
   */
  handleSliderChange = (e: React.ChangeEvent<any>, value: any) => {
    if(this.audioRef) {
      this.audioRef.currentTime = value;
      this.setState({currentTime: this.audioRef.currentTime})
    }
  }

  /**
   * Play the current audio file
   */
  handlePlay = () => {
    if (this.audioRef) {
      !this.audioRef.paused
        ? this.audioRef.pause()
        : this.audioRef.play();        
    }
  };

  /**
   * Stop the current audio file
   */
  handleStop = () => {
    if (this.audioRef && this.sliderRef) {
      this.audioRef.pause();
      this.audioRef.currentTime = 0
      this.setState({ currentTime: 0 });
    }
  };

  render() {
    const { src } = this.props;
    const { currentTime, duration, playing } = this.state;

    return (
      <div>
        <audio
          ref={(input) => {
            this.audioRef = input;
          }}
          src={src}
        />
        <Slider value={currentTime} min={0} max={duration} onChange={this.handleSliderChange} />
        <Controls playing={playing} currentTime={currentTime} onPlay={this.handlePlay} onStop={this.handleStop} />

      </div>
    );
  }
}

export default AudioPlayer;

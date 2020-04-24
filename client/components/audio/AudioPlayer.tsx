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

type IProps = {
    src: string
};

class AudioPlayer extends Component<IProps> {
    audioRef: any;
    currentTimeInterval: any;
    sliderRef: any
  constructor(props: Readonly<IProps>) {
    super(props);
    

    this.audioRef = React.createRef<HTMLAudioElement>();
    this.sliderRef = React.createRef<HTMLInputElement>();
    this.currentTimeInterval = null;
  }

  componentDidMount() {
    this.initializeAudioPlayer()
  }

  /**
   * Controls and listeners for the audio and range input
   */
  initializeAudioPlayer = () => {
    const duration = this.audioRef.duration || 0
    const app = this
		// Get duration of the song and set it as max slider value
		this.audioRef.onloadedmetadata = function() {
			app.setState({duration});
		}
		
		// Sync slider position with song current time
		this.audioRef.onplay = () => {
      this.sliderRef.max = this.audioRef.duration;
			this.currentTimeInterval = setInterval( () => {
        this.sliderRef.value = this.audioRef.currentTime;
			}, 500);
		};
		
		this.audioRef.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};
		
		// Seek functionality
		this.sliderRef.onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
			clearInterval(this.currentTimeInterval);
			this.audioRef.currentTime = e.target.value;
		};
  }

  handleAudioPlayer = (time: any) => {
    console.log('time!', time, typeof time)
  }

    handlePlay = () => {
        if(this.audioRef) {
            this.audioRef.play()
        }
    }

    handleStop = () => {
        if(this.audioRef && this.sliderRef) {
          this.audioRef.currentTime = 0;
          this.sliderRef.value = 0;
          this.audioRef.pause(); 
        }
    }

    render() {
        const { src } = this.props

        return (
            <div>
                <audio ref={(input) => {this.audioRef = input}} 
                src={src} />
            
            <input type="range" ref={(input) => {this.sliderRef = input}} min="0" defaultValue="0" />
            <input type="button" value="Play"
                onClick={ this.handlePlay } />
            <input type="button" value="Stop"
                onClick={ this.handleStop } />
            </div>
            
        );
    }
}

export default AudioPlayer;

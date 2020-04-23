/*
 * File: AudioPlayer.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:33 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Plays audio for a single track
 * Last Modified: Wednesday, 22nd April 2020 11:03:13 pm
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
  
//   currentTimeInterval: any;
  // slider: React.RefObject<HTMLInputElement>;

  // private slider: React.createRef<HTMLInputElement>()
//   audioRef = React.useRef<HTMLAudioElement>(null);

  constructor(props: Readonly<IProps>) {
    super(props);
    

    this.audioRef = React.createRef<HTMLAudioElement>();
    // this.currentTimeInterval = null;

  }

  // initializeAudioPlayer() {
  //   // this.slider.value = 0;
	// 	// this.currentTimeInterval = null;
  //   const duration = this.audio!.duration || 0
  //   const app = this
	// 	// Get duration of the song and set it as max slider value
	// 	this.audio!.onloadedmetadata = function() {
	// 		app.setState({duration});
	// 	}
		
	// 	// Sync slider position with song current time
	// 	this.audio!.onplay = () => {
	// 		this.currentTimeInterval = setInterval( () => {
	// 			this.slider!.value = this.audio!.currentTime;
	// 		}, 500);
	// 	};
		
	// 	this.audio!.onpause = () => {
	// 		clearInterval(this.currentTimeInterval);
	// 	};
		
	// 	// Seek functionality
	// 	this.slider!.onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 		clearInterval(this.currentTimeInterval);
	// 		this.audio!.currentTime = parseInt(e.target.value);
	// 	};
  // }

  handleAudioPlayer = (time: any) => {
    console.log('time!', time, typeof time)
  }

    handlePlay = () => {
    // this.audio!.play();
        if(!this.audioRef) {
            console.log('not here partner🦆')
        } else {
            console.log(this.audioRef.current, 'play!')
        }
    }

    handleStop() {
        // this.audio!.currentTime = 0;
        // this.slider!.value = 0;
        // this.audio!.pause(); 
    }

    render() {
        const { src } = this.props

        console.log('src', src, this.audioRef)
        return (
            <div>
                <audio ref={(input) => {this.audioRef = input}} 
                //ref={this.audioRef} 
                src={src} />
            {/* <audio ref={(audio) => { this.audioRef = audio }} src={src} /> */}
            <input type="button" value="Play"
                onClick={ this.handlePlay } />
            </div>
        );
    }
}

export default AudioPlayer;

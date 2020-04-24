/**
 * Primary dependencies
 */
import React from "react";

/**
 * Component Library imports
 */
import { Grid, IconButton } from "@material-ui/core";
import { PlayArrow, Pause, Stop } from "@material-ui/icons";

/**
 * Defining Prop Types
 */
type IProps = {
  playing: boolean;
  currentTime: number;
  onPlay: () => void;
  onStop: () => void;
};

export const Controls = (props: IProps) => (
  <Grid container justify="space-around">
    <Grid item>
      <IconButton color="primary" onClick={props.onPlay}>
        {!props.playing ? <PlayArrow /> : <Pause />}
      </IconButton>
    
      <IconButton
        color="secondary"
        disabled={!props.playing && props.currentTime === 0}
        onClick={props.onStop}
      >
        <Stop />
      </IconButton>
    </Grid>
  </Grid>
);

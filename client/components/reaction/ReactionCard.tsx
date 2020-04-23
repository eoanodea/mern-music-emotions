/**
 * Primary dependencies
 */
import React, { Component } from "react";

/**
 * Component Library imports
 */
import {
  Paper,
  Typography,
  CardActionArea,
  Grid,
  createStyles,
  Theme,
  withStyles,
  Grow,
} from "@material-ui/core";

/**
 * Defining Prop Types
 */
type IProps = {
  reaction: {
    name: string;
    icon: any;
  };
  classes: {
    reactionPaper: string;
  };
  index: number;
  onSelect: (name: string) => void;
};

/**
 * Injected styles for component
 * 
 * @param spacing 
 */
const styles = ({ spacing }: Theme) =>
  createStyles({
    reactionPaper: {
      padding: spacing(4),
      textAlign: "center",
    },
  });

/**
 * Renders a reaction
 */
const ReactionCard = (props: IProps) => (
    <Grow in={true} timeout={500 * props.index}>
      <Paper elevation={4}>
        <CardActionArea
          className={props.classes.reactionPaper}
          onClick={() => props.onSelect(props.reaction.name)}
        >
          <Typography variant="h4">{props.reaction.icon}</Typography>
          <Typography variant="caption">{props.reaction.name}</Typography>
        </CardActionArea>
      </Paper>
    </Grow>
);

export default withStyles(styles)(ReactionCard);

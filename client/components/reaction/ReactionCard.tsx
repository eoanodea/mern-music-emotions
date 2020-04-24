/**
 * Primary dependencies
 */
import React from "react";

/**
 * Component Library imports
 */
import {
  Paper,
  Typography,
  CardActionArea,
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
  reactionPaper: string
  index: number;
  onSelect: (name: string) => void;
};


/**
 * Renders a reaction
 */
const ReactionCard = (props: IProps) => (
    <Grow in={true} timeout={500 * props.index}>
      <Paper elevation={4}>
        <CardActionArea
          className={props.reactionPaper}
          onClick={() => props.onSelect(props.reaction.name)}
        >
          <Typography variant="h4">{props.reaction.icon}</Typography>
          <Typography variant="caption">{props.reaction.name}</Typography>
        </CardActionArea>
      </Paper>
    </Grow>
);

export default ReactionCard;

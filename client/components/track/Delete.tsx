import React, { Component } from "react";
import { remove } from "./api-track";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { History } from "history";

type IProps = {
  id: string;
  history: History;
  actionButton: string;
};

type IState = {
  open: boolean;
  loading: boolean;
  error: string;
  openSnack: boolean;
};

class Delete extends Component<IProps, IState> {
  state = {
    open: false,
    loading: false,
    error: "",
    openSnack: false,
  };

  setLoading = (loading: boolean) => this.setState({ loading });

  handleSnack = () => this.setState({ openSnack: false });

  handleDialog = () => this.setState({ open: !this.state.open });

  delete = () => {
    this.setLoading(true);
    const { id } = this.props;

    remove(id).then((data) => {
      if (data.error) {
        this.setState({
          loading: false,
          error: data.error,
          openSnack: true,
          open: false,
        });
      }
      this.setLoading(false);

      this.props.history.push(`/tracks`);
    });
  };

  render() {
    const { loading, error, open, openSnack } = this.state;
    return (
      <React.Fragment>
        <Button
          className={this.props.actionButton}
          color="secondary"
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={this.handleDialog}
        >
          Delete Track
        </Button>
        <Dialog open={open} onClose={this.handleDialog}>
          <DialogTitle>Confirm Delete Track</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Are you sure you want to delete this track?
              <br />
              <br />
              This cannot be undone
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleDialog}
              color="secondary"
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              onClick={this.delete}
              color="primary"
              disabled={loading}
              variant="contained"
              endIcon={
                loading && <CircularProgress size={18} color="secondary" />
              }
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={openSnack}
          onClose={this.handleSnack}
          autoHideDuration={6000}
          message={<span>🤷🏻‍♂️ Error Deleting Track {error}</span>}
        />
      </React.Fragment>
    );
  }
}

export default Delete;

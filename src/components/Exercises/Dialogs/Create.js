import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


export default class Create extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state
        return (
            <div>
                <Button variant="fab" onClick={this.handleToggle} mini>
                    <AddIcon />
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle 
                        id="form-dialog-title"
                    >
                        Create a New Exercise
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                        </DialogContentText>
                        <form>

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" variant="raised">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    formControl: {
        width: 500
    }
});


export default withStyles(styles)(class Create extends React.Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        },
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        });
    };

    handleSubmit = () => {
        //TODO: validate
        const { exercise } = this.state;

        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
        });

        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        });
    };

    render() {
        const { open, exercise: { title, description, muscles } } = this.state;
        const { classes, muscles: categories } = this.props;

        return (
            <div>
                <Button onClick={this.handleToggle} mini>
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
                            <TextField
                                label="Title"
                                className={classes.formControl}
                                value={title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                            />
                            <br />
                            <TextField
                                label="Description"
                                multiline
                                rows="5"
                                value={description}
                                className={classes.formControl}
                                onChange={this.handleChange('description')}
                                margin="normal"
                            />
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                >
                                    {categories.map(category => 
                                        <MenuItem key={category} value={category}>
                                            {category}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            color="primary" 
                            variant="contained"
                            onClick={this.handleSubmit}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
})
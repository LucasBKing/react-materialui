import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';

const Header = ({ muscles, onExerciseCreate }) => (
    <AppBar position="static" >
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
                Exercise database
            </Typography>
            <CreateDialog 
                muscles={muscles} 
                onCreate={onExerciseCreate}
            />
        </Toolbar>
    </AppBar>

);

export default Header;
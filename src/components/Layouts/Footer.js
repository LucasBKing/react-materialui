import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Footer = ({ muscles }) => {
    return (
        <Paper>
            <Tabs
                value={0}
                indicatorColor="primary" 
                textColor="primary" centered
            >   
                <Tab label="All" />
                {muscles.map(group =>
                    <Tab key={group} label={group} />
                )}
                
            </Tabs>
        </Paper>
    )
}

export default Footer;
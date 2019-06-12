import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from './Feed';
import Sleep from './Sleep';
import Sidebar from '../Home/Navbar/Sidebar';
// import Slider from '../../Components/Home/Navbar/';
import Grid from '@material-ui/core/Grid';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Paper, Dialog } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.pallete.text.secondary
    },
}));

class App extends Component {

    render() {
       const { classes } = this.props
        return (
            <React.Fragment>

                <div className="backgroundbody">

                    <div className={classes.root}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>Test message</Paper>
                        </Grid>
                    </div>
                    <div>
                        <Sidebar />
                        {/* <Slider/> */}
                    </div>

                    <Babyprofile />
                    <Feed />
                    <Sleep />
                    {/* <Slider/> */}
                  
                </div>

            </React.Fragment>

        );
    }
}

export default withStyles(useStyles) (App);

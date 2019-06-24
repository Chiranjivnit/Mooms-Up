import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from '../Home/Babyfeed/Feed';
import Sleep from './Sleep';
import Sidebar from '../Home/Navbar/Sidebar';
// import Slider from '../../Components/Home/Navbar/';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

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

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let logedIn = true;
        if (token == null) {
            logedIn = false
        }

        this.state = {
            logedIn
        }
    }

    render() {
        const { classes } = this.props
        if (this.state.logedIn === false) {
             return <Redirect to="/"></Redirect>
        }
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

export default withStyles(useStyles)(App);

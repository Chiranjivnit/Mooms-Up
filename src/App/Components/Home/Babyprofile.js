import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Images from '../../Themes/Images';
// import babyavatar from '../homepage/image/babyavatar.jpg';
// import baby from '../homepage/image/baby.svg';
// import height from '../homepage/image/height.svg';
// import weight from '../homepage/image/weight.svg';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
//import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 250,
        height: 250
    },
    height: {
        marginLeft: 50,
        margin: 10,
        width: 40,
        height: 40,
    },
}));

function Babyprofile() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item sm>
                <div className={classes.root}>
                    <div className="babyprofilecard">

                        <div className="babyprofile">
                            <h1 className="vanness">Vanness</h1>
                            <Grid className="babyavatar">
                                <Avatar className={classes.bigAvatar}  >
                                    <img src={Images.babyavatar} className={classes.bigAvatar} alt="logo" />
                                </Avatar>

                            </Grid>
                            <label>
                                <img src={Images.baby} className="babyicon" alt="height"></img>
                                1 Year Old
                             </label> <br />

                            <label>
                                <img src={Images.height} className="babyicon" alt="height"></img>60cm
                             </label><br />

                            <label>
                                <img src={Images.weight} className="babyicon" alt="height"></img> 8.6kg
                             </label><br />
                            <button className="button">view details ></button>

                        </div>
                    </div>
                    <div className="babydiary">
                        <h2 className="">Baby Diary</h2> <h3 className="seeall">see all ></h3>
                    </div>
                </div>

            </Grid>
        </Grid>
    );
}

Babyprofile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Babyprofile);
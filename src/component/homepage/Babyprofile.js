import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import babyavatar from '../homepage/image/babyavatar.jpg';
import baby from '../homepage/image/baby.svg';
import height from '../homepage/image/height.svg';
import weight from '../homepage/image/weight.svg';

const useStyles = makeStyles({
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
});

function Babyprofile() {
    const classes = useStyles();

    return (

        <div className="babyprofilecard">
        
            <div className="babyprofile">
                <h1 className="vanness">Vanness</h1>
                <Grid className="babyavatar">
                    <Avatar className={classes.bigAvatar}  >
                        <img src={babyavatar} className={classes.bigAvatar} alt="logo" />
                    </Avatar>

                </Grid>
                <img src={baby} className={classes.height} alt="height"></img>1 Year Old <br />
                <img src={height} className={classes.height} alt="height"></img>60cm <br />
                <img src={weight} className={classes.height} alt="height"></img> 8.6kg <br />
                <button className="button">view details ></button>
                <h2 className="babydiary">Baby Diary</h2> <h3 className="seeall">see all ></h3>
            </div>

        </div>
    );
}

export default Babyprofile;
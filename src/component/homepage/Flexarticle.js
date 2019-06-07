import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme=>({
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
        flexDirection:"row",
    },
    root:{
        padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
    }
}));

class Display extends Component {
    
    render() {
        const { classes } = this.props
        return (
            <div className={classes.height}>
                <Box display="flex" p={1} bgcolor="background.paper">
                    {"I'm a flexbox container!"}
                </Box>
            </div>
        );
    }
}
export default withStyles(useStyles) (Display);
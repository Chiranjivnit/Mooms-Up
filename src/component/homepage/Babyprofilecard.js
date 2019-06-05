import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = theme => ({
    root: {
        flexGrow: 2,
        marginTop: 20
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});


class Babyprofilecard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }


    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded })
    }


    render() {
        const { classes, children } = this.props
        const bull = <span className={classes.bullet}>.</span>
        return (
            <div className={classes.root} pt={10}>
                <Paper className={classes.paper} pt={10}>
                    <Grid container spacing={2} pt={10}>
                        <Grid item pt={10}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Standard license
                      </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Full resolution 1920x1080 • JPEG
                      </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                      </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                      </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }

}

Babyprofilecard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Babyprofilecard);
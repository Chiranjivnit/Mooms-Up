import React from 'react';
// import settings from '../IconsComponents/settings.svg';
import Images from '../../../Themes/Images'
// import '../Navbar/Icons.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 20,
        width: 40,
        height: 40,

    },
});

function Tools() {
    const classes = useStyles();
    const ImageClick = () => {
        window.alert("Sorry Baby Tool is Under maintenance Thank you.")
    }
    return (
        <div className="tool">
            <Grid container justify="center" alignItems='center' >
                <header className="Tool-header">
                    <img src={Images.settings} className={classes.bigAvatar} alt="logo" onClick={() => ImageClick()} />
                </header>
            </Grid>
        </div>
    );
}

export default Tools;

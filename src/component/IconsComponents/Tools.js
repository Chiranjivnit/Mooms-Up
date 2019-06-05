import React from 'react';
import settings from '../IconsComponents/settings.svg';
import '../IconsComponents/Icons.css';
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
    const clases = useStyles();
    return (
        <div className="tool">
            <Grid container justify="center" alignItems='center' >
                <header className="Tool-header">
                    <img src={settings} className={clases.bigAvatar} alt="logo" />
                </header>
            </Grid>
        </div>
    );
}

export default Tools;

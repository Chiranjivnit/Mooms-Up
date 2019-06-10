import React from 'react';
// import server from '../IconsComponents/server.svg';
import Images from '../../../Themes/Images'
// import '../IconsComponents/Icons.css';
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

function Resourses() {
    const handleResourse=()=>{
        window.alert("Sorry Resourse is Under maintenance Thank you.")
    }
    const clases = useStyles();
    return (
        <div className="tool">
            <Grid container justify="center" alignItems='center' >
                <header className="Tool-header">
                    <img src={Images.server} className={clases.bigAvatar} alt="logo" onClick={()=>handleResourse()} />
                </header>
            </Grid>
        </div>
    );
}

export default Resourses;

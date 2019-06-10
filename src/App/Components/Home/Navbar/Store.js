
import React from 'react';
// import frontstore from '../IconsComponents/frontstore.svg';
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

function Store() {
    const clases = useStyles();
    const handleStore=()=>{
        window.alert("Sorry Store is Under maintenance Thank you.")
    }
    return (
        <div className="tool">
            <Grid container justify="center" alignItems='center' >
                <header className="Tool-header">
                    <img src={Images.frontstore} className={clases.bigAvatar} alt="logo" onClick={()=>handleStore()}/>
                </header>
            </Grid>
        </div>
    );
}

export default Store;

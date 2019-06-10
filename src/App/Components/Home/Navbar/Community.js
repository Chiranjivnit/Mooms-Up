import React from 'react';
// import chatbubbles from '../IconsComponents/chatbubbles.svg';
import Images from '../../../Themes/Images';
import './Icons.css';
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

function Community() {
    const clases = useStyles();

    const handleCommunity = ()=>{
        window.alert("Sorry Community is Under maintenance Thank you.")
    }
    return (
        <div className="tool">
            <Grid container justify="center" alignItems='center' >
                <header className="Tool-header">
                    <img src={Images.chatbubbles} className={clases.bigAvatar} alt="logo" onClick={()=>handleCommunity()} />
                    
                </header>
            </Grid>
        </div>
    );
}

export default Community;

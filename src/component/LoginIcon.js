import React from 'react';
//import '../IconsComponents/Icons.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import facebookicon from '../Logo/facebookicon.svg';
import googleplus from '../Logo/googleplus.svg';

const useStyles = makeStyles({
  avatar: {
    margin:5,
  },
  bigAvatar: {
    margin:5,
    width: 60,
    height: 60,

  },
});

function Loginicon() {
  const clases = useStyles();
  return (
    <div className="tool">
      <Grid container justify="center" alignItems='center' >
        <header className="Tool-header">
          <img src={facebookicon} className={clases.bigAvatar} alt="logo" />
          <img src={googleplus} className={clases.bigAvatar} alt="logo" />
        </header>
      </Grid>
    </div>
  );
}

export default Loginicon;

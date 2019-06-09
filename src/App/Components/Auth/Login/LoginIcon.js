import React from 'react';
//import '../IconsComponents/Icons.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Images from '../../../Themes/Images'

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
          <img src={Images.facebookicon} className={clases.bigAvatar} alt="logo" />
          <img src={Images.googleplus} className={clases.bigAvatar} alt="logo" />
        </header>
      </Grid>
    </div>
  );
}

export default Loginicon;

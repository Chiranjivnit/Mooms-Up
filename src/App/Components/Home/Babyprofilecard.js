import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";

const styles =theme=> ({
  card: {
    display:"flex",
    flexDirection:'row',
    marginTop:0,
    minWidth: 675,
    width:600,
    marginLeft:20,
    height:600,
    [theme.breakpoints.up('xl')]:{
      backgroundColor:green[500],
    },
  },
  bullet: {
    display: "flex",
    flexDirection:'row',
    // margin: "0 0",
    // transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class SimpleCard extends Component {

  render(){

  const { classes } = this.props;
  const bull = <span className={classes.bullet}>•</span>;
   
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly. hgdagdagsafJAh;jh hzdsgigiusagiadaud hagdyuagtyagdidiudaihduhauhashashaushaiusaiussaiuaushau
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);

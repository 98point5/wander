import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class CarCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} onClick={this.props.handleSelect}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/8/82/Tesla_Model_S_%28Facelift_ab_04-2016%29_trimmed.jpg"
            title="Car"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Tesla
            </Typography>
            <Typography component="p">{this.props.carId}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Mileage
          </Button>
          <Button size="small" color="primary">
            Location
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CarCard);

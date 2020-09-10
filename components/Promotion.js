import React , {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Promotion() {
  const classes = useStyles();
  const [counter , setCounter] = useState(1);
  const displayCounter = counter > 0;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/images/image.jpg"
        title="Paella dish"
      />
      <CardContent>
      <Typography variant="h5" gutterBottom>
        โปรโมชั่น 1 แถม 1 ( 59 บาท)
      </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <ButtonGroup style={{ margin : "10px 0px 0px 100px"}}>
     {displayCounter && <Button onClick={() => setCounter(counter - 1)}>-</Button>}
     {displayCounter &&  <Button disabled>{counter}</Button>}
       <Button onClick={() => setCounter(counter + 1)}>+</Button>
      </ButtonGroup>
      </CardContent>
    </Card>
  );
}
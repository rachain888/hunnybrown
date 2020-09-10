import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow : 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  rootcard: {
    maxWidth: 345,
  },
  media: {
    height: '300px',
    width : '300px',
    margin : '0px 0px 0px 20px'
  },
}));


export default function confirm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <React.Fragment>
      <CssBaseline />
      <Container fixed>
          <br/>
      <Grid container spacing={3} >
        <Grid item xs={12}>
        <Card className={classes.root}>
        <CardHeader style={{textAlign: 'center'}}
        title="2ABC1GE"
        // subheader="September 14, 2016"
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/qrcode.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
            Booking Detail
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} style={{margin : '0px 0px 0px 50px'}}>
          <TextField
            id="datetime-local"
            label="ชื่อ-นามสกุล"
            value="ลาเต้ ซอฟต์"
            className={classes.textField}
           />
        </Grid>
        <Grid item xs={12} style={{margin : '0px 0px 0px 50px'}}>
          <TextField
            id="datetime-local"
            label="เบอร์โทร"
            value="099-999999"
            className={classes.textField}
           />
        </Grid>
        <Grid item xs={12}style={{margin : '0px 0px 0px 50px'}} >
        <form className={classes.container} noValidate>
          <TextField 
            id="datetime-local"
            label="วันที่และเวลา"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
           />
        </form>
        </Grid>
        <Grid item xs={4} sm={4} style={{margin : '0px 0px 0px 50px'}}>
          <TextField
            id="datetime-local"
            label="จำนวน"
            value="4"
            className={classes.textField}
           />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            id="datetime-local"
            label="โซน"
            value="A"
            className={classes.textField}
           />
        </Grid>
        </Grid>
        </CardContent>
      </CardActionArea>
    </Card>   
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              รายละเอียด
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>รายการอาหาร</TableCell>
            <TableCell align="right">จำนวน</TableCell>
            <TableCell align="center">ราคา</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>1. ต้มยำกุ้ง</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">399 บาท</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2. ผัดไทย</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell align="right">400 บาท</TableCell>
            </TableRow>

          <TableRow>
            <TableCell colSpan={1}>รวม</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">799 บาท</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax 7%</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">49 บาท</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">898 บาท</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>   
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  </div>
  );
}
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    textAlign: 'center',
    marginRight: theme.spacing(1),
    width: 200,
  },
  fab: {
    position:'fixed',
    bottom : 0,
    left : 0,
    margin : 0 ,
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    width : '330px',
    height : '500px',
    color: theme.palette.text.secondary,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function booking() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    zone: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [counter , setCounter] = useState(0);
  

  return (
    <div className={classes.root}>
       <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper} style ={{ margin : "30px 20px 20px 20px"}}>
      <Container fixed>
      <Grid 
      container spacing={3}
      justify="space-evenly"
      direction="column"
      alignItems="center" > 
        <Grid item xs={12} style={{alignItems:'center'}} >
        <TextField 
            id="datetime-local"
            label="ชื่อ - นามสกุล"
            className={classes.textField}
           />
        </Grid>
        <Grid item xs={12} style={{alignItems:'center'}} >
        <TextField
            id="datetime-local"
            label="เบอร์โทร"
            className={classes.textField}
           />
        </Grid>
        <Grid item xs={12} style={{alignItems:'center'}} >
        <form className={classes.container} noValidate>
          <TextField 
            id="datetime-local"
            label="เลือกวันที่และเวลา"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
           />
        </form>
        </Grid>
        <Grid item xs={12} >
        <Typography variant="caption" display="block" gutterBottom>
        ระบุจำนวน *คน
      </Typography>
        <ButtonGroup>
     <Button onClick={() => setCounter(counter - 1)}>-</Button>
     <Button disabled>{counter}</Button>
       <Button onClick={() => setCounter(counter + 1)}>+</Button>
      </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
        <FormControl required className={classes.formControl} style={{alignContent: 'center'}}>
        <InputLabel htmlFor="age-native-required">Zone</InputLabel>
        <Select
          native
          value={state.zone}
          onChange={handleChange}
          name="zone"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>A</option>
          <option value={2}>B</option>
          <option value={3}>C</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </Grid>
      </Grid>
      </Container>
      </Paper>
      <Link href="/booking/confirm">
      <Fab variant="extended" color="primary" className={classes.fab} >
          Book
        </Fab>
        </Link>
    </React.Fragment>
  </div>
  );
}
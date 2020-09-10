import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar2 from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menufood from './MenuFood';
import Promotion from './Promotion';
import Link from 'next/link'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 20,
  },
  fab: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: 0,
    width: "100%",
  },
  text: {
    margin: '20px',
    fontSize: '20px',
    fontWeight: 400,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root}>

      {/* Menu Bar */}
      <AppBar2 position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        // aria-label="full width tabs example"
        >
          <Tab label={<a href="#promotion">Promotion</a>} />
          <Tab label={<a href="#menu">Menu</a>} />
        </Tabs>
      </AppBar2>
      <a name="menu">
        <div className={classes.text}>
          <h2 className="title"> {"Promotion"}</h2>
        </div>
        <Promotion />
      </a>
      <a name="menu">
        <div className={classes.text}>

          <h2 className="title"> {"Menu"}</h2>
        </div>

        <Menufood />
        <br /><br />
        <Link href="/booking">
          <Fab variant="extended" color="primary" className={classes.fab} >
            PreOrder
        </Fab>
        </Link>
      </a>
    </div>
  );
}
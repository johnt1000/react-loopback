import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
git
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Link className='linkNavbar' to='/'>Coffe Shop</Link>
                    </Typography>
                    <Link className='linkNavbar' to='/login' button>
                        <ListItem button>Login</ListItem>
                    </Link>
                    <Link className='linkNavbar' to='/signup' button>
                        <ListItem button>Sign Up</ListItem>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
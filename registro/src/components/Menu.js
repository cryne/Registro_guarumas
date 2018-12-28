import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotFound from './NotFound'
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, Typography, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Index extends React.Component {
    constructor(props){
        super(props);
        this.props=props;

        this.state={
        };
    }

    render() {
        const {classes,theme, container} =this.props;
        return(
            <div>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Registro CableVision Guarumas
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        );
    }
}

Index.propTypes={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
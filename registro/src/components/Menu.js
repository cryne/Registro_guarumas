import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotFound from './NotFound'
import ItemNavegacion from './ItemNavegacion';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, Typography, Hidden, Divider, List } from '@material-ui/core';
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
            user: null,
            mobileOpen: false,
        };
    }

    

    render() {
        const {classes, theme, container} =this.props;
        const { user, mobileOpen } = this.state;

        /*const menuLogout = (
            <Link key="LogOut" to="/logout">
                <ItemNavegacion
                    text="Log out"
                    icon="return"
                />
            </Link>
        );*/
        const OpcionA =(
            <List>
                <ItemNavegacion
                    text="Opcion A"
                    iconName="none"
                />
            </List>
        );
        const OpcionB =(
            <List>
                <ItemNavegacion
                    text="Opcion B"
                    iconName="none"
                />
            </List>
        );
        const OpcionC =(
            <List>
                <ItemNavegacion
                    text="Opcion C"
                    iconName="none"
                />
            </List>
        );
        const OpcionD =(
            <List>
                <ItemNavegacion
                    text="Opcion D"
                    iconName="none"
                />
            </List>
        );const OpcionE =(
            <List>
                <ItemNavegacion
                    text="Opcion E"
                    iconName="none"
                />
            </List>
        );const OpcionF =(
            <List>
                <ItemNavegacion
                    text="Opcion F"
                    iconName="none"
                />
            </List>
        );const OpcionG =(
            <List>
                <ItemNavegacion
                    text="Opcion G"
                    iconName="none"
                />
            </List>
        );const OpcionH =(
            <List>
                <ItemNavegacion
                    text="Opcion H"
                    iconName="none"
                />
            </List>
        );
        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    <Divider/>
                    {OpcionA}
                    <Divider/>
                    {OpcionB}
                    <Divider/>
                    {OpcionC}
                    <Divider/>
                    {OpcionD}
                    <Divider/>
                    {OpcionE}
                    <Divider/>
                    {OpcionF}
                    <Divider/>
                    {OpcionG}
                    <Divider/>
                    {OpcionH}
                </div>
            </div>
        );

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
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                        {drawer}
                        </Drawer>                    
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
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
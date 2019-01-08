import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotFound from './NotFound'
import ItemNavegacion from './ItemNavegacion';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Route, Link, Switch, Redirect,
  } from 'react-router-dom';
import { IconButton, Typography, Hidden, Divider, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Servicios from './Servicios';
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

function Rutas({ component: Component, path, ...rest}) {
    return (
        <Route
        {...rest}
        path={path}
        render={(props)=>{
            return(
                <Component {...props}/>
            );
        }}
        />
    );
}

class Index extends React.Component {
    constructor(props){
        super(props);
        this.props=props;

        this.state={
            user: null,
            mobileOpen: false,
        };
    }
    componentDidMount() {
        // TODO hacer que si se actualiza que mande a la ruta que estaba
        const token = localStorage.getItem('granco-token');
      }
    handleDrawerToggle() {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
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
            <Link to="/servicios">
                <List>
                    <ItemNavegacion
                    text="Servicios"
                    iconName="none"
                />
                </List>
            </Link>
        );
        const OpcionB =(
            <Link to="/pagoservicios">
            <List>
                <ItemNavegacion
                    text="Pago de Servicios"
                    iconName="none"
                />
            </List>
            </Link>
        );
        const OpcionC =(
            <Link to="/">
            <List>
                <ItemNavegacion
                    text="Opcion C"
                    iconName="none"
                />
            </List>
            </Link>
        );
        const OpcionD =(
            <Link to="/">
            <List>
                <ItemNavegacion
                    text="Opcion D"
                    iconName="none"
                />
            </List>
            </Link>
        );
        const OpcionE =(
            <Link to="/">
            <List>
                <ItemNavegacion
                    text="Opcion E"
                    iconName="none"
                />
            </List>
            </Link>
        );
        const OpcionF =(
            <Link to="/">
            <List>
                <ItemNavegacion
                    text="Opcion F"
                    iconName="none"
                />
            </List>
            </Link>
        );
        const OpcionG =(
            <Link to="/">
            <List>
                <ItemNavegacion
                    text="Opcion G"
                    iconName="none"
                />
            </List>
            </Link>
        );
        const OpcionH =(
            <Link to="/">
            <List>
                <ItemNavegacion
                    text="Opcion H"
                    iconName="none"
                />
            </List>
            </Link>
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
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
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
                            /*anchor={theme.direction === 'rtl' ? 'right' : 'left'}*/
                            open={mobileOpen}
                            onClose={this.handleDrawerToggle}
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
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Rutas path="/servicios" component={Servicios}/>
                        <Rutas path="/pagoservicios" component={NotFound}/>
                        <Route render={() => <NotFound/>}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

Index.propTypes={
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.isRequired,
};

export default withStyles(styles)(Index);
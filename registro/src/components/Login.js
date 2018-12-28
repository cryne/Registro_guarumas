import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Paper, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme =>({
    root: {
        width: '40%',
        marginTop: theme.spacing.unit * 3,
        margin: '40%',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    textf: {
        marginLeft: '5%',
        width: '90%',
    },
    title: {
        paddingTop: '20px',
        paddingBottom: '10px',
        paddingLeft: '20px',
    },
});

class Login extends Component{

    render() {
        const {classes} = this.props;
        return (
            <div>
                <form >
                    <Paper className={classes.root}>
                        <Typography variant="h6" gutterBottom className={classes.title}>Login</Typography>
                        <div>
                            <TextField
                                className={classes.textf}
                                id="usuario"
                                label="Usuario"
                                margin="normal"
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.textf}
                                id="password"
                                label="Contraseña"
                                margin="normal"
                            />
                        </div>
                        <div>
                            <Button type="submit" className={classes.textf} variant="contained" color="primary">Ingresar</Button>
                        </div>
                    </Paper>
                </form>
            </div>
        );
    }
}

Login.propTypes={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
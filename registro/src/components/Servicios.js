import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, TextField, Button } from '@material-ui/core';

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
        width: '40%',
    },
    title: {
        paddingTop: '20px',
        paddingBottom: '10px',
        paddingLeft: '20px',
    },
});

class Servicios extends Component {

  render() {
    const { classes } = this.props;

    return (
        <div>
            <form >
                <Paper className={classes.root}>
                        <Typography variant="h6" gutterBottom className={classes.title}>Servicios</Typography>
                        <div>
                            <label>Cable</label>
                            <TextField
                                className={classes.textf}
                                id="cable"
                                margin="normal"
                                value="3000"
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <label>Internet</label>
                            <TextField
                                className={classes.textf}
                                id="internet"
                                margin="normal"
                                value="4000"
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <Button type="submit" className={classes.textf} variant="contained" color="primary">Cambiar</Button>
                        </div>
                </Paper>
            </form>
        </div>
    );
  }
}

Servicios.propTypes = {
  classes: PropTypes.object.isRequired, 
};

export default withStyles(styles)(Servicios);
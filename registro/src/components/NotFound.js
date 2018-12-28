import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    paddingTop: '20px',
    paddingLeft: '20px',
  },
  body: {
    paddingLeft: '20px',
    paddingBottom: '20px',
  },
  root_table: {
    width: '30%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { classes } = this.props;

    return (
      <Typography variant="h4" gutterBottom className={classes.title}>Pagina no existe!</Typography>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired, 
};

export default withStyles(styles)(NotFound);

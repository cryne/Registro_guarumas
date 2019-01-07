import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FaceIcon from '@material-ui/icons/Face';
import InfoIcon from '@material-ui/icons/Info';
import LockIcon from '@material-ui/icons/Lock';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  ItemNavegacionBar: {
    marginLeft: 240,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
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
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ItemNavegacion extends React.Component {
  constructor(props) {
    super(props);

    this.getIcon = this.getIcon.bind(this);

    this.state = {
      text: props.text,
      iconName: props.iconName,
      buttonMode: props.buttonMode === 'true',
    };
  }

  getIcon() {
    const { iconName } = this.state;

    if (iconName === 'mail') {
      return <MailIcon />;
    }

    if (iconName === 'announcement') {
      return <AnnouncementIcon />;
    }

    if (iconName === 'check') {
      return <CheckCircleIcon />;
    }

    if (iconName === 'assign') {
      return <AssignmentIcon />;
    }

    if (iconName === 'work') {
      return <WorkIcon />;
    }

    if (iconName === 'fingerprint') {
      return <FingerprintIcon />;
    }

    if (iconName === 'find') {
      return <FindInPageIcon />;
    }

    if (iconName === 'favorite') {
      return <FavoriteIcon />;
    }

    if (iconName === 'face') {
      return <FaceIcon />;
    }

    if (iconName === 'info') {
      return <InfoIcon />;
    }

    if (iconName === 'lock') {
      return <LockIcon />;
    }

    if (iconName === 'problem') {
      return <ReportProblemIcon />;
    }

    if (iconName === 'home') {
      return <HomeIcon />;
    }

    if (iconName === 'list') {
      return <ListIcon />;
    }

    if (iconName === 'add person') {
      return <PersonAddIcon />;
    }

    if (iconName === 'return') {
      return <KeyboardReturnIcon />;
    }

    if (iconName === 'cup') {
      return <LocalCafeIcon />;
    }

    if (iconName === 'bank') {
      return <AccountBalanceIcon />;
    }

    if (iconName === 'none') {
      return <div />;
    }

    return <InboxIcon />;
  }

  render() {
    const { buttonMode, text } = this.state;

    if (buttonMode) {
      return (
        <ListItem button key={text}>
          <ListItemIcon>{this.getIcon()}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      );
    }
    return (
      <ListItem key={text}>
        <ListItemIcon>{this.getIcon()}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  }
}

ItemNavegacion.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(ItemNavegacion);

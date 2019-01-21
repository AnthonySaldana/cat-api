import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  featWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexBasis: '400px'
  },
  buttonWrapper: {
      display: 'flex',
      marginTop: '25px',
      justifyContent: 'space-between',
      width: '300px'
  },
  featImg: {
      maxWidth: '500px'
  }
});

function ImagesTable(props) {
  const { classes, image, favorited, disliked } = props;
  return (
        <div className={classes.featWrapper}>
            <img className={classes.featImg} src={image.url} />
            <div className={classes.buttonWrapper}>
                <Button variant="contained" color="primary" onClick={favorited}>
                    Purrrfect
                </Button>
                <Button variant="contained" color="secondary" onClick={disliked}>
                    Shoo Kitty
                </Button>
            </div>
        </div>
  );
}

ImagesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImagesTable);
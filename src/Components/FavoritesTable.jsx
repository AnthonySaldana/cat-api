import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  img: {
    maxWidth: 400
  }
});

function ImagesTable(props) {
  const { classes, favorites } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Favorite Images</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favorites.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <img src={row.image.url} className={classes.img} alt="Probably a cat" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ImagesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImagesTable);
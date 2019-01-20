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
});

function BreedsTable(props) {
  const { classes, breeds } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Origina</TableCell>
            <TableCell align="right">Life Span</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Wiki</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {breeds.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.origin}</TableCell>
              <TableCell align="right">{row.life_span}</TableCell>
              <TableCell align="right">{row.country_code}</TableCell>
              <TableCell align="right">{row.wikipedia_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

BreedsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BreedsTable);
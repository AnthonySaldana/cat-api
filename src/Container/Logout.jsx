import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../Actions/CatActions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

class Logout extends React.Component {
  handleLogout = () => {
    const {logout} = this.props;
    logout()
    window.location.href = '/login';
  }

  render() {
    this.handleLogout();
    return null;
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout));

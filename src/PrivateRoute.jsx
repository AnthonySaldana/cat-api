// AuthGate, Check if user is allowed to access this route
// If they are: they proceed to the page
// If not: they are redirected to the login page.

import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
    authenticated: state.cats.authenticated,
    cats: state.cats,
    state: state
  });

export class PrivateRoute extends React.Component {
  render() {
    const { authenticated, cats, state } = this.props;
    const Component = this.props.component;
    return (
      <Route
        render={props =>
          (authenticated ? (
            <Component {...props}/>
          ) : (
            window.location.href = '/login'
          ))
        }
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import configureStore from './Store/configureStore';
import Breeds from './Container/Breeds';
import Dashboard from './Container/Dashboard';
import Favorites from './Container/Favorites';
import Images from './Container/Images';
import Login from './Container/Login';
import Logout from './Container/Logout';
import Header from './Components/Header';
import './App.css';
import PrivateRoute from './PrivateRoute';

// Store Redux State in Local Storage
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = configureStore(persistedState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/breeds" component={Breeds} />
              <PrivateRoute path="/favorites" component={Favorites} />
              <PrivateRoute path="/images" component={Images} />
              <PrivateRoute path="/" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

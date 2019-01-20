import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import rootReducer from './Reducers'
import configureStore from './Store/configureStore';
import Dashboard from './Container/Dashboard';
import Settings from './Container/Settings';
import Header from './Components/Header';
import './App.css';

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
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

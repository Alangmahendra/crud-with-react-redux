import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter as Router, Route, Link as RouterLink} from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
               To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            <Router>
                <div>
                    <RouterLink to={'/Home'}>
                     <button type="button" className="btn btn-outline-warning" btn-lg="true">TO HOME</button>
                    </RouterLink>

                  <Route exact path={'/Home'} component={Home}/>
                </div>
            </Router>
            </div>
        </Provider>
    );
  }
}

export default App;

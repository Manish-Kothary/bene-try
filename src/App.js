import React, {Component} from 'react';
import './App.css';
import MainRouter from './MainRouter';
// import Header from './components/Header/index';
// import Footer from './components/Footer/index';
import { Link, withRouter } from 'react-router-dom';

 class App extends Component {
  render() {
    return (
      <div className="App">
          <MainRouter />
      </div>
    );
  }
}

export default withRouter(App);
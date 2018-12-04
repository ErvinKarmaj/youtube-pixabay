import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Search from './components/Search';
import './Pixabay.css';

class Pixabay extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Pixabay;
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './MainScreen.css';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
    
    palette: {
      primary: {main: "#212121"},
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });
  
  const Background = "https://pixabay.com/get/e837b90f2df7063ed1584d05fb1d4796e57ee6dd19b30c4090f4c37ca3edbdb0d9_1280.jpg"
  const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")"
  };


class Main extends Component {
    render() {
      return (
          <div>
           <MuiThemeProvider theme={theme}>
           <section style={ sectionStyle }>
              <div>
                <Link to="/youtube" className="button"><input className="center" type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtubemain" /></Link>
                <Link to="/pixabay" className="button"><input className="center" type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pixabay-logo.svg/2000px-Pixabay-logo.svg.png" alt="pixabaymain"/></Link>
              </div>
              </section>
          </MuiThemeProvider>
          </div>
      );
    }
  }
  
  export default Main;
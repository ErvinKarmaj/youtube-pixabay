import React, {Component} from 'react';
import {AppBar } from '@material-ui/core';
import {Link} from 'react-router-dom';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: '' };
    }

    render() {
        return (
            <div>
              <AppBar position="static" color="default">
                  <div > 
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" width="120" height="25" alt="youtube"/> 
                         <input className="search-bar" placeholder="Search here"
                         value={this.state.term}
                         onChange={event => this.onInputChange(event.target.value)}/>
                     <Link to="/" className="btn btn-success">MainScreen</Link>    
                   </div>
               </AppBar>
            </div>
            
            
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;


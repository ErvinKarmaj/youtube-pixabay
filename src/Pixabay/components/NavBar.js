import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav class="navbar navbar-inverse">
             <div class="container-fluid">
               <div class="navbar-header">
                 <a class="navbar-brand" href="/pixabay">Pixabay</a>
                 <Link to="/" className="btn btn-success">MainScreen</Link>
               </div>
             </div>
           </nav>
    );
};

export default NavBar;
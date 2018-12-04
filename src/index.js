import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React from 'react'

import {BrowserRouter, Route, Switch } from 'react-router-dom';

import MainScreen from './MainScreen';
import Youtube from './Youtube/Youtube';
import Pixabay from './Pixabay/Pixabay';


ReactDOM.render( 
<BrowserRouter>
  <div>
    <Switch>
      <Route path="/youtube" component={Youtube} />
      <Route path="/pixabay" component={Pixabay} />
      <Route path="/" component={MainScreen} />
    </Switch>
   </div>
 </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

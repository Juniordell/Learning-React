import React, { useState } from 'react';
import Main from './components/Main';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Pots from './components/Post'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/:post_id' component={Pots} />
        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;

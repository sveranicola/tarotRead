import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


var App = () => {
  return (
    <div>
      Tarot
      <BrowserRouter >
        <Route path='/' exact>
          Home
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
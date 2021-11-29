import React, { useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Switch, Link} from 'react-router-dom';
import Home from './Home.jsx'

var App = () => {
  return (
    <div>
      Tarot
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
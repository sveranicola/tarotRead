import React, { useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Switch, Link} from 'react-router-dom';
import Home from './Components/Home.jsx'
import PullCards from './Components/PullCards.jsx'

var App = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} exact />
        </Routes>
        <Routes>
          <Route path='/PullCards' element={<PullCards />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
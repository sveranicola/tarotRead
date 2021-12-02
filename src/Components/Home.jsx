import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


var Home = () => {
  return (
    <div>
      <div> TAROTREAD </div>
      <div>
        <p>Tarot Cards have been around since the 15th Century</p>
        <p>Over that time they have evolved, but the intention</p>
        <p>remaind clear. To use these cards to attain guidance and clarity.</p>
      </div>
      <div>
        <p>Through TarotRead our goal is to facilitate your journey.</p>
        <p>Pull the cards as you need, and reflect on them.</p>
        <p>As there are only 78 cards in a deck please be aware of this limitation.</p>
      </div>
      <div>
        <p>Please take a moment to meditate.</p>
        <p>Some like to clear their minds,</p>
        <p>others like to bring an intention to mind.</p>
      </div>
      <div>
        To continue to your journey click below
        <Link to='/PullCards'> PullCards </Link>
      </div>
    </div>
  )
}

export default Home;
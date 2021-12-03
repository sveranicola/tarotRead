import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Axios from 'axios';


var PullCards = () => {
  const [pulled, addPulled] = useState([]);
  const [flipped, addFlipped] = useState([]);

  useEffect(() => {
    Axios.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=78")
    .then((res) => {
      addPulled(res.data.cards);
    })
    .catch((err) => {throw(err)});
  }, []);

  return (
    <div>
      Pull the cards
    </div>
  )
}

export default PullCards;
import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Axios from 'axios';
// import deck from '../deck.js';


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

  function pullOne () {
    const newP = pulled.slice(1);
    const newF = [... flipped, pulled[0]];
    addPulled(newP);
    addFlipped(newF);
  };

  return (
    <div>
      {flipped ?
        flipped.map((obj) => {
          const img = null;
          return (
            <div>
              insert new words here

              {obj.name}
            </div>
          );
        })
        : null
      }
      <button onClick={()=>{pullOne()}}>click</button>
    </div>
  )
}

export default PullCards;
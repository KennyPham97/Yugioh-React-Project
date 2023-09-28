import React, { useState } from 'react';
import './Api.css'

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
      headers: {
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '6973120ademshb6af529915f21d3p1f30b0jsn4f6ca8f1c577'
      }})
    let data = await response.json();
    setJoke(data.value);

   
    } 

  return (
    <div className='api'>
      <input className='input-field' type="text" placeholder='Type in a card name'/>
      
      <button className='search-button' onClick={fetchJoke}>
        Card Search
      </button>
      
        <div>
          <h2>Card Photo goes here</h2>
          <p>{joke}</p>
        </div>
    </div>
  )
}
      

export default ChuckNorrisJoke;

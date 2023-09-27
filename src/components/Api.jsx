import React, { useState } from 'react';

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
    <div>
      <button onClick={fetchJoke}>
        Click Here for Jokes
      </button>
      
        <div>
          <h2>Chuck Norris Joke:</h2>
          <p>{joke}</p>
        </div>
    </div>
  )
}
      

export default ChuckNorrisJoke;

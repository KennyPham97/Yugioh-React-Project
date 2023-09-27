import React, { useState } from 'react';
import './Calc.css'
import Stopwatch from './Stopwatch';
import CoinFlipper from './CoinFlipper';


function AddNumbers() {
  const [num1, setNum1] = useState(8000);
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handleSubtract = () => {
    const sub = Number(num1) - Number(num2);
    setResult(sub);
  }

  return (
    <div className='calc'>
      <div><CoinFlipper/></div>
      

      <div><Stopwatch /></div>
      <h3>Life Points <img className = 'puzzle'src ='https://cdna.artstation.com/p/assets/images/images/033/535/002/original/alberto-umana-millenium-pussle.gif?1609877865'></img></h3>
      
      
      <input className='input'
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        
      />

      <input className='input'
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button className='add' onClick={handleAdd}>Add</button>
      <button className='sub' onClick={handleSubtract}>Subtract</button>
      <p>Current Life: {result}</p>
      <input className='input'
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        
      />

      <input className='input'
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button className='add' onClick={handleAdd}>Add</button>
      <button className='sub' onClick={handleSubtract}>Subtract</button>
      {/* <p>Current Life: {result}</p> */}
    </div>
  );
}

export default AddNumbers;
        

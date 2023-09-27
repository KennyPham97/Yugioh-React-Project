import React, { useState } from 'react';
import './CoinFlipper.css'

function CoinFlipper() {
  const [coinResult, setCoinResult] = useState(null);

  const handleFlip = () => {
    const randomResult = Math.random() < 0.5 ? 'HEADS' : 'TAILS';
    setCoinResult(randomResult);
  };

  return (
    <div className='coin-container'>
      <button className='input' onClick={handleFlip}>Flip a Coin</button>
      <button className='coin'>{coinResult}</button>
    </div>
  );
}

export default CoinFlipper;


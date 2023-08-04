import React, { useState } from 'react';
import './Morpion.css';

const Morpion = () => {
  return (
    <div>
      <h4 className='text-center text-3xl text-yellow-600 underline font-semibold mb-4'>Morpion en construction 🏗️</h4>
      <div className="board">
        <div className="cell">1</div>
        <div className="cell">2</div>
        <div className="cell">3</div>
        <div className="cell">4</div>
        <div className="cell">5</div>
        <div className="cell">6</div>
        <div className="cell">7</div>
        <div className="cell">8</div>
        <div className="cell">9</div>
      </div>
    </div>
  );
};


export default Morpion
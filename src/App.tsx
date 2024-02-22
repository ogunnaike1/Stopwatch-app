import { useState } from 'react'
import './App.css'
import Watch from './Component/Watch'
import Start_button from './Component/Start_button';
import Stop_button from './Component/Stop_button';
import Reset_button from './Component/Reset_button';

function App() {

  return (
    <div className="div-main">
      <div className="div-wrapper">
        <Watch />
        <div className='div-button'>
          <Start_button/>
          <Stop_button/>
          <Reset_button/>
        </div>
      </div>
    </div>
  );
}

export default App

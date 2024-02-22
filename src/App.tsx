import { useState } from 'react'
import './App.css'
import Watch from './Component/Watch'
import Start_button from './Component/Start_button';
import Stop_button from './Component/Stop_button';
import Reset_button from './Component/Reset_button';

const App = () => {
  const [spanSecondsValue, SetSpanSecondValue]= useState(0);
  const [spanMinuteValue, SetSpanMinuteValue]= useState(0);
  const [SpanHourValue, SetSpanHourValue]= useState(0);
  const [SpanMilliSecondValue, SetMilliSecondValue]= useState(0);
  const changeNumber = (number: { toString: () => string; }) => number.toString().padStart(2, '0');
  const secondsValue = changeNumber(spanSecondsValue);
  const minutesValue = changeNumber(spanMinuteValue);
  const hoursValue = changeNumber(SpanHourValue);
  const milliSecondValue = changeNumber(SpanHourValue);
  let time;
  let second = 0;
  let minute = 0;
  let hour = 0;
  const timer = () =>{
    time = setInterval(StartTimer, 100);
  } 
  const StartTimer = () =>{
    SetSpanSecondValue((second) => {
      if(second===60){
      }
     return second++;
   

    })
    // if (second === 60){
    //   minute++
    //   SetSpanSecondValue(0);
    //   SetSpanMinuteValue(minute);
    // }
    // if (minute === 60){
    //   hour++
    //   SetSpanMinuteValue(0);
    //   SetSpanHourValue(hour);
    // }
  }

  return (
    <div className="div-main">
      <div className="div-wrapper">
        <Watch
        secondsValue = {secondsValue}
        minutesValue = {minutesValue }
        hoursValue= {hoursValue} 
        milliSecondValue ={milliSecondValue}/>
        <div className='div-button'>
          <Start_button onClick={timer}/>
          <Stop_button/>
          <Reset_button/>
        </div>
      </div>
    </div>
  );
}

export default App

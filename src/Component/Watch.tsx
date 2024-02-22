import { useState } from "react"

const Watch = () => {
    const [SpanSecondsValue, SetSpanSecondValue]= useState(3);
    const [SpanMinuteValue, SetSpanMinuteValue]= useState(2);
    const [SpanHourValue, SetSpanHourValue]= useState(1);
    const [SpanMilliSecondValue, SetMilliSecondValue]= useState(1);
    const changeNumber = (number: { toString: () => string; }) => number.toString().padStart(2, '0');
    const SecondsValue = changeNumber(SpanSecondsValue);
    const MinutesValue = changeNumber(SpanMinuteValue);
    const HoursValue = changeNumber(SpanHourValue);
    const MilliSecondValue = changeNumber(SpanHourValue);
    
    
  return (
    <div className='div-stopwatch'>
        <span>{SecondsValue}</span>
        <span>:</span>
        <span>{MinutesValue}</span>
        <span>:</span>
        <span>{HoursValue}</span>
        <span>:</span>
        <span>{MilliSecondValue}</span>
    </div>
  )
}

export default Watch
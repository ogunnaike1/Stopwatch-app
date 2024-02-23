import { useState } from "react";
import "./App.css";
import Watch from "./Component/Watch";
import Start_button from "./Component/Start_button";
import Stop_button from "./Component/Stop_button";
import Reset_button from "./Component/Reset_button";

const App = () => {
  const [spanSecondsValue, setSpanSecondValue] = useState(0);
  const [spanMinuteValue, setSpanMinuteValue] = useState(0);
  const [SpanHourValue, setSpanHourValue] = useState(0);
  const [SpanMilliSecondValue, setMilliSecondValue] = useState(0);

  const changeNumber = (number: { toString: () => string }) =>
    number.toString().padStart(2, "0");
  let secondsValue = changeNumber(spanSecondsValue);
  const minutesValue = changeNumber(spanMinuteValue);
  const hoursValue = changeNumber(SpanHourValue);
  const milliSecondValue = changeNumber(SpanMilliSecondValue);
  let Time: number | undefined;
  let millisecond = 0;
  let second = 0;
  let minute = 0;
  let hour = 0;
  const StartTimer = () => {
    Time = setInterval(Timer, 10);
  };

  const StopTimer = () => {
    clearInterval(Time);
  };

  const ResetTimer = () => {
    clearInterval(Time);
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    setSpanSecondValue(0);
    setSpanMinuteValue(0);
    setSpanHourValue(0);
    setMilliSecondValue(0);
  };

  const Timer = () => {
    millisecond++;
    setMilliSecondValue(millisecond);
    if (millisecond === 59) {
      millisecond = 0;
      second++;
      setSpanSecondValue(second);
    }
    if (second === 59) {
      second = 0;
      minute++;
      setSpanMinuteValue(minute);
    }
    if (minute === 59) {
      hour++;
      minute = 0;
      setSpanHourValue(hour);
    }
  };

  return (
    <div className="div-main">
      <div className="div-wrapper">
        <Watch
          secondsValue={secondsValue}
          minutesValue={minutesValue}
          hoursValue={hoursValue}
          milliSecondValue={milliSecondValue}
        />
        <div className="div-button">
          <Start_button onClick={StartTimer} />
          <Stop_button onClick={StopTimer} />
          <Reset_button onClick={ResetTimer} />
        </div>
      </div>
    </div>
  );
};

export default App;

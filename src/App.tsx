import { useState, useEffect } from "react";
import "./App.css";
import Watch from "./Component/Watch";
import Start_button from "./Component/Start_button";
import Stop_button from "./Component/Stop_button";
import Reset_button from "./Component/Reset_button";

const App = () => {
  const [spanSecondsValue, setSpanSecondValue] = useState(0);
  const [spanMinuteValue, setSpanMinuteValue] = useState(0);
  const [spanHourValue, setSpanHourValue] = useState(0);
  const [SpanMilliSecondValue, setMilliSecondValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let [millisecond, second, minute, hour] = [0, 0, 0, 0];

  useEffect(() => {
    let Time;
    isRunning && (Time = setInterval(Timer, 10));
    return () => {
      clearInterval(Time!);
    };
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    setSpanSecondValue(0);
    setSpanMinuteValue(0);
    setSpanHourValue(0);
    setMilliSecondValue(0);
  };

  const startSecondTimer = () => {
    millisecond = 0;
    setSpanSecondValue((prevSecond) => {
      second = prevSecond + 1;
      return second;
    });
  };

  const startMinuteTimer = () => {
    second = 0;
    setSpanMinuteValue((prevMinute) => {
      minute = prevMinute + 1;
      return minute;
    });
  };

  const startHourMinute = () => {
    minute = 0;
    setSpanHourValue((prevHour) => {
      hour = prevHour + 1;
      return hour;
    });
  };

  const Timer = () => {
    millisecond++;
    setMilliSecondValue(millisecond);
    millisecond === 59 && startSecondTimer();
    second === 59 && startMinuteTimer();
    minute === 59 && startHourMinute();
  };

  return (
    <div className="div-main">
      <div className="div-wrapper">
        <Watch
          secondsValue={String(spanSecondsValue).padStart(2, "0")}
          minutesValue={String(spanMinuteValue).padStart(2, "0")}
          hoursValue={String(spanHourValue).padStart(2, "0")}
          milliSecondValue={String(SpanMilliSecondValue).padStart(2, "0")}
        />
        <div className="div-button">
          <Start_button onClick={() => setIsRunning(true)} />
          <Stop_button onClick={stopTimer} />
          <Reset_button onClick={resetTimer} />
        </div>
      </div>
    </div>
  );
};

export default App;

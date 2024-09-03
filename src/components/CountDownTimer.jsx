import { useState, useEffect } from "react";
import Card from "./Card";

function CountDownTimer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  function getFormatedTime() {
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor(time / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(time / (1000 * 60)) % 60,
      seconds: Math.floor(time / 1000) % 60,
    };
  }

  let timeLeft = getFormatedTime();

  return (
    <div>
      <h1>we're launching soon</h1>
      <div className="timer">
        <Card timeLeft={timeLeft.days} label={"days"} />
        <Card timeLeft={timeLeft.hours} label={"hours"} />
        <Card timeLeft={timeLeft.minutes} label={"minutes"} />
        <Card timeLeft={timeLeft.seconds} label={"seconds"} />
      </div>
    </div>
  );
}

export default CountDownTimer;

import React, { useState, useEffect } from "react";
const Clock = ({ style }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${padZero(hours)}:${padZero(minutes)} ${ampm}`;
  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <div style={{ ...style }}>
      <p className="time">{formatTime()}</p>
    </div>
  );
};

export default Clock;

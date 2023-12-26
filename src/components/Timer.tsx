"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-100 bg-white">
      <div className="flex text-2xl space-x-1.5 w-1/3">
        <div className="timer-segment">
          <span className="time">{days}</span>
          <span className="label">Days</span>
        </div>
        <span className="divider">:</span>
        <div className="timer-segment">
          <span className="time">{hours}</span>
          <span className="label">Hours</span>
        </div>
        <span className="divider">:</span>
        <div className="timer-segment">
          <span className="time">{minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <span className="divider">:</span>
        <div className="timer-segment">
          <span className="time">{seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
}

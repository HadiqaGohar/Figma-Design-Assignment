'use client'
import React, { useState, useEffect } from 'react';

function Clock() {
  const targetDate = new Date('2024-12-10T00:00:00'); // Set your target date here

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="countdown flex gap-3">
        <div className=''>
          <p className='text-xs'>Days</p>
          <div className='text-2xl md:text-3xl font-bold mr-2'>{timeLeft.days.toString().padStart(2, '0')}</div>
        </div>
        <p className='mt-4 text-3xl font-bold text-[#DB4444]'>:</p>
        <div className='ml-4'>
          <p className='text-xs'>Hours</p>
          <div className='text-2xl md:text-3xl font-bold'>{timeLeft.hours.toString().padStart(2, '0')}</div>
        </div>
        <p className='mt-4 text-3xl ml-3 font-bold text-[#DB4444]'>:</p>
        <div className='ml-4'>
          <p className='text-xs'>Minutes</p>
          <div className='text-2xl md:text-3xl font-bold'>{timeLeft.minutes.toString().padStart(2, '0')}</div>
        </div>
        <p className='mt-4 text-3xl ml-2 font-bold text-[#DB4444]'>:</p>
        <div className='ml-4'>
          <p className='text-xs'>Seconds</p>
          <div className='text-2xl md:text-3xl font-bold'>{timeLeft.seconds.toString().padStart(2, '0')}</div>
        </div>
      </div>
    </div>
  );
}

export default Clock;

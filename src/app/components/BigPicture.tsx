'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const TimerBox = ({ value, unit }: any) => (
    <div className='bg-white text-black font-black rounded-full text-center h-[60px] w-[60px] lg:h-[70px] lg:w-[70px] flex flex-col justify-center items-center'>
        <span className='text-xs md:text-md'>{value}</span>
        <span className='text-xs font-normal'>{unit}</span>
    </div>
);

function BigPicture() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        days: 5,
        minutes: 59,
        seconds: 35,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, days, minutes, seconds } = prev;

                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
                if (days < 0) {
                    clearInterval(timer); // Stop the timer when days reach 0
                }

                return { hours, days, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <div className='flex bg-[#020202] text-white p-6 sm:p-8 lg:p-12 flex-col lg:flex-row'>
            {/* Left Section */}
            <div className='w-full lg:w-1/2 flex flex-1 flex-col justify-center p-6 sm:p-8 md:mx-16'>
                <h3 className='text-[#00FF66] text-sm md:text-lg font-semibold'>Categories</h3>
                <h2 className='text-3xl sm:text-3xl lg:text-6xl font-medium font-sans my-4 mt-8'>
                    Enhance Your
                </h2>
                <span className='text-3xl sm:text-3xl lg:text-6xl font-medium font-sans mb-10'>Music Experience</span>
                <div className='flex flex-row gap-4 sm:gap-6 font-bold text-center'>
                    <TimerBox value={timeLeft.hours} unit="Hours" />
                    <TimerBox value={timeLeft.days} unit="Days" />
                    <TimerBox value={timeLeft.minutes} unit="Minutes" />
                    <TimerBox value={timeLeft.seconds} unit="Seconds" />
                </div>
                <button className='bg-[#00FF66] sm:h-[50px] sm:w-[200px] text-white px-6 py-3 rounded hover:bg-[#00CC55] transition mt-8'>
                    Buy Now
                </button>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-1/2 flex flex-1 justify-center items-center mt-8 lg:mt-0'>
                <div className='max-w-[600px] lg:max-w-[800px]'>
                    <Image
                        src="/speaker.jpeg"
                        alt="Showcasing a music experience product"
                        className='w-full h-auto object-contain'
                        width={800}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}

export default BigPicture;

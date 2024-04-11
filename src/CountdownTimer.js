import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
     


    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [spaceRemaining, setSpaceRemaining] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);



    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return null;
        }

        return (
            <div key={interval} className="flex flex-col items-center justify-center p-2">
                <span className="text-2xl font-bold">{timeLeft[interval]}</span>
                <span>{interval.toUpperCase()}</span>
            </div>
        );
    });

    return (
        <div>
            <div className="text-center mt-2 flex justify-center items-center">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
            <p className="text-center mt-2 font-bold md:text-xl">Space Remaining: {timeLeft.days - 1}</p>
            
        </div>
    );
};

export default CountdownTimer;

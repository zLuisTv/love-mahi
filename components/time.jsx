import React, { useState, useEffect } from 'react'


const _seconds = 1000;
const _minutes = _seconds * 60;
const _hours = _minutes * 60;
const _days = _hours * 24
let timer;

async function updateCountdown(setDays, setHours, setMinutes, setSeconds) {
    const time = new Date();
    // console.log(time)
    // const month = time.getMonth();
    // const nextMonth = month + 2;
    // let targetMonth = (nextMonth) > 13 ? "01" : (nextMonth);
    // let nextYear = (nextMonth) > 13 ? time.getFullYear() + 1 : time.getFullYear();

    const day = new Date(`2023-10-25T00:00:00`); // Target time
    const duration = await day - time;

    if (duration <= 0) {
        clearInterval(timer);
        return;
    } else {

        const remaining_days = Math.floor(duration / _days)
        const remaining_hours = Math.floor((duration % _days) / _hours);
        const remaining_minutes = Math.floor((duration % _hours) / _minutes);
        const remaining_seconds = Math.floor((duration % _minutes) / _seconds)

        setDays(remaining_days);
        setHours(remaining_hours);
        setMinutes(remaining_minutes);
        setSeconds(remaining_seconds);
    }
}

function formatValue(value) {
    return value < 10 ? `0${value}` : value;
}

export function Chronometer() {

    const [span_days, setSpanDays] = useState(null);
    const [span_hours, setSpanHours] = useState(null);
    const [span_minutes, setSpanMinutes] = useState(null);
    const [span_seconds, setSpanSeconds] = useState(null);
    const [countdownFinished, setCountdownFinished] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            updateCountdown(setSpanDays, setSpanHours, setSpanMinutes, setSpanSeconds)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, []);

    useEffect(() => {
        if (span_days === 0 && span_hours === 0 && span_minutes === 0 && span_seconds === 0) {
            setCountdownFinished(true);
        }
    }, [span_days, span_hours, span_minutes, span_seconds]);

    return (
        <div className='flex flex-col items-center'>
            {countdownFinished ? (
                <p className='uppercase text-center'>Es un día para celebrar y pasarla bien contigo.</p>
            ) : (
                <div className='flex'>
                    <p className='text-8xl font-extralight mobile-s:text-[58px] mobile-l:text-[60px]'>{formatValue(span_days)}:{formatValue(span_hours)}:{formatValue(span_minutes)}:{formatValue(span_seconds)}</p>
                </div>
            )}
        </div>
    )
}
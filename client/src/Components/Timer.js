import React, { useState, useRef, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@mui/material/Button';

const Timer = ({ topics }) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    let totalInitTime = 0;
    let prevTime = 0;
  
    const getInitialTime = () => {
        topics.forEach(topic => {
            totalInitTime += topic.time*60
        });
        const seconds = Math.floor(totalInitTime % 60);
        const minutes = Math.floor((totalInitTime / 60) % 60);
        const hours = Math.floor((totalInitTime / 60 / 60) % 24);
        setTimer(
            (hours > 9 ? hours : '0' + hours) + ':' +
            (minutes > 9 ? minutes : '0' + minutes) + ':'
            + (seconds > 9 ? seconds : '0' + seconds)
        )
    }

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        getInitialTime();
        if (prevTime === 0) {
            deadline.setSeconds(deadline.getSeconds() + totalInitTime);
        }
        else {
            deadline.setSeconds(deadline.getSeconds() + totalInitTime - prevTime);
        }
        prevTime = totalInitTime;
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, [topics]);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  
    return (
        <div style={{padding: '20px'}} className="App">
            <Typography variant='h3' align='center' sx={{padding: '20px'}}> Remaining Time: {timer}</Typography>
            <div style={{marginLeft: '45%'}}>
                <Button variant="contained" color='info' align='center' onClick={onClickReset} sx={{marginTop: '10px'}}> Reset </Button>
            </div>
        </div>
    )
}

export default Timer
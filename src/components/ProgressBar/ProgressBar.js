import React, { useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({numberOfQuestions}) => {

    const [progress,setProgress]=useState(0);


    const handleProgress = () => {
        if(progress < 100){
            setProgress(progress+1/numberOfQuestions*100);
        }
    }

    const handleButtonReset = () => {
        setProgress(0);
    }
    
    return (
        <div className='container'>
            <div className='progress-bar'>
                <div className='progress-bar-fill' style={{width:`${progress}%`}}></div>
            </div>
            <span>{progress}%</span>
            <button onClick={handleProgress}>progress</button>
            <button onClick={handleButtonReset}>reset</button>
        </div>
  )
}

export default ProgressBar

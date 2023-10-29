import React, { useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({percentage}) => {

    
    return (
        <div className='container'>
            <div className='progress-bar'>
                <div className='progress-bar-fill' style={{width:`${percentage}%`}}></div>
            </div>
        </div>
  )
}

export default ProgressBar

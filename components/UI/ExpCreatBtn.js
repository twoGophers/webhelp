import React from 'react'
import { Button } from "@mui/material";
import './ExpCreatBtn.scss';

export default function ExpCreatBtn() {
  return (
    <div className='exp-btn'> 
        <div className='exp-btn__btn'>
            Export data
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.50317 0.9375V10.9375" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.41138 6.8457L5.50229 10.9366L9.59319 6.8457" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
        <Button className="btn-fucs">Create report</Button>
    </div>
  )
}

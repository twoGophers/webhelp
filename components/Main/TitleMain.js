import React from 'react';
import './TitleMain.scss';
import ExpCreatBtn from '../UI/ExpCreatBtn';

export default function TitleMain({title, text}) {
  return (
    <div className='title'>
        <div className='title__name'>
            <h2>{title}</h2>
            <span>{text}</span>
        </div>
        <div>
          <ExpCreatBtn />
        </div>
    </div>
  )
}

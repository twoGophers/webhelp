import React from 'react'

export default function PriceGreen({item}) {
  return (
    <div className='statistic__data'>
        <span>{ item.number > 1000 ? (item.number / 1000).toFixed(1) : item.number}{ item.number > 1000 && 'K' }</span> 
        <div>
            {item.percentage}%
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.747477 6.01025L6.08081 0.67692" stroke="#14CA74" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.08081 5.70508V0.676794H1.05253" stroke="#14CA74" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
    </div>
  )
}

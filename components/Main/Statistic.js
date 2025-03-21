import React from 'react'
import './Static.scss';

import data from '@/api/statistic'
import IconMain from '../UI/IconMain';
import PriceGreen from '../UI/PriceGreen';

export default function Statistic() {
  return (
    <div className='statistic'>
        {
            data?.map((item) => (
                <div className='statistic__body' key={item.id}>
                    <div className='statistic__name'>
                        <div className='statistic__name-icon'>
                            <IconMain name={item.icon} />
                            <span>{item.name}</span>
                        </div>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.10002 9.78896C8.7753 9.78896 9.32273 9.24213 9.32273 8.56758C9.32273 7.89302 8.7753 7.34619 8.10002 7.34619C7.42474 7.34619 6.87732 7.89302 6.87732 8.56758C6.87732 9.24213 7.42474 9.78896 8.10002 9.78896Z" fill="#D9E1FA"/>
                            <path d="M13.8772 9.78896C14.5525 9.78896 15.0999 9.24213 15.0999 8.56758C15.0999 7.89302 14.5525 7.34619 13.8772 7.34619C13.202 7.34619 12.6545 7.89302 12.6545 8.56758C12.6545 9.24213 13.202 9.78896 13.8772 9.78896Z" fill="#D9E1FA"/>
                            <path d="M2.32268 9.78896C2.99796 9.78896 3.54538 9.24213 3.54538 8.56758C3.54538 7.89302 2.99796 7.34619 2.32268 7.34619C1.6474 7.34619 1.09998 7.89302 1.09998 8.56758C1.09998 9.24213 1.6474 9.78896 2.32268 9.78896Z" fill="#D9E1FA"/>
                            </svg>
                    </div>
                    <PriceGreen item={item} />
                </div>
            ))
        }
    </div>
  )
}

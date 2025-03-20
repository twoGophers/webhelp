import React from 'react';
import './Navigation.scss';

import AccordionComponent from './AccordionComp'

// data
import navData from '@/api/nav'
import otherNavData from "@/api/other_nav"

export default function Navigation() {

  return (
    <div className='nav'>
        <div className='nav__body'>
            <div className="nav__body-logo">
                <img src='./Logo.svg' alt='Logo' />
            </div>
            <div className="nav__body-search">
                <img src="./Input Icon Left.svg" alt="" />
                <input type="text" placeholder='Search for...'  />
            </div>
            <AccordionComponent data={navData} />
            <AccordionComponent data={otherNavData} />
            
        </div>
    </div>
  )
}

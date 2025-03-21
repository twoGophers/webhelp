import React from 'react';
import './Navigation.scss';

import AccordionComponent from './AccordionComp'

// data
import navData from '@/api/nav'
import otherNavData from "@/api/other_nav"
import { Button } from '@mui/material';

export default function Navigation() {

  return (
    <div style={{ position: 'relative'}}>
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
              <div className='line'></div>
              <AccordionComponent data={otherNavData} />
              <Button className='nav__btn'>
                Get template 
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.35944 0.859375L13 6.49995L7.35944 12.1405" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.9999 6.5L1 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </Button>
          </div>
      </div>
    </div>
  )
}

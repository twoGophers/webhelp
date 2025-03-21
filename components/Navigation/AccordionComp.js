'use client';
import React, { useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconNav from '../UI/IconNav';

import './AccordionComp.scss'

export default function AccordionComponent({data}) {

    const [load, setLoad] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [iconName, setIconName] = useState(null);
    const [activeTab, setActiveTab] = useState(null);

    const handleChange = (panel, icon) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setIconName(isExpanded ? icon : null);
        setActiveTab(null);
    };

    const handleActiveTab = (tab) =>  {
        setActiveTab(tab);
    }

    useEffect(() => {
        setLoad(true);
    }, []);

    
  return (
    <div>
            {
                load && (
                    <div className='accord'>
                        {
                            data?.map((item) => (
                                <Accordion 
                                    key={item.id} 
                                    className="accord__body"
                                    expanded={expanded === item.title} 
                                    onChange={handleChange(item.title, item.icon)}
                                    >
                                    <AccordionSummary
                                     expandIcon={item.children.length > 0 ? <ExpandMoreIcon /> : null}
                                    aria-controls={item.id}
                                    id={item.id}
                                    className="accord__btn "
                                    >
                                    <Typography component="span" className='accord__typogr' >
                                        {
                                            item.icon && <IconNav name={item.icon} iconActive={iconName === item.icon} />
                                        }

                                        {
                                            item.img && 
                                            (
                                                <div>
                                                    <img src={item.img} alt="" />
                                                </div>
                                            )
                                        }
                                        
                                        <div className='accord__profile'>
                                            <span className={`accord__title ${expanded === item.title ? 'active-fux' : ''}`}>{item.title}</span>
                                            { item?.text && (<span className='accord__profile-text'>{item?.text}</span>)}
                                        </div>
                                        
                                    </Typography>
                                    </AccordionSummary>
                                    <ul>
                                    {
                                        item?.children.map((child) =>(
                                            <AccordionDetails 
                                                key={child.id} 
                                                className={`accord__link ${activeTab === child.link ? 'active-accord__link' : ''}`}
                                                onClick={() => handleActiveTab(child.link)}
                                                >
                                                    <li className={activeTab === child.link ? 'active-tab' : ''}>{child.link}</li>
                                                
                                            </AccordionDetails>
                                        ))
                                    }
                                    </ul>
                                    
                                </Accordion>
                            ))
                        }
                    </div>
                )
            }
    </div>
  )
}

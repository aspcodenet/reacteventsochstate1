import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { PageContext } from './data/PageContext'

export const HeaderMenuItem = (props) => {
    const { activePage, setActivePage } = useContext(PageContext);

//    let clicked = false

    const IWasClicked = ()   =>{

        setActivePage(props.text)
    }

    return (
        <li>
            <a 
                onClick={ IWasClicked }
                //className="headeranchor"
                className={`headeranchor ${activePage === props.text ? 'active' : ''}`}
                href="#">
                { props.text }
            </a>
        </li>
      )    
}
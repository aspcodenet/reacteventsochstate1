import React from 'react'
import { useState } from 'react'

export const HeaderMenuItem = ({ text,onPageMenuClick,activePage }) => {

//    let clicked = false

    const IWasClicked = ()   =>{

        onPageMenuClick(text)
    }

    return (
        <li>
            <a 
                onClick={ IWasClicked }
                //className="headeranchor"
                className={`headeranchor ${activePage === text ? 'active' : ''}`}
                href="#">
                { text }
            </a>
        </li>
      )    
}
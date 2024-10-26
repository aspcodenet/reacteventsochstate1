import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const HeaderMenuItem = ({ text, navLink}) => {
    const location = useLocation();
    //const { id } = useParams();    

    return (
        <li>
            <Link 
                to={navLink}
                //className="headeranchor"
                className={`headeranchor ${location.pathname === navLink ? 'active' : ''}`}>
                { text }
            </Link>

            {/* <a 
                onClick={ IWasClicked }
                //className="headeranchor"
                className={`headeranchor ${activePage === text ? 'active' : ''}`}
                href="#">
                { text }
            </a> */}
        </li>
      )    
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar()
{
    return (
       <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img alt="Home" src="" />
                    </Link>
                    <ul className='nav-menu'> 
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>  
                                <img alt="Nav1" src="" />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>  
                                <img alt="Nav2" src="" />
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>  
                                <img alt="Nav3" src="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
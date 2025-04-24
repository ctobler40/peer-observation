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
                        PeerView
                    </Link>
                    <ul className='nav-menu'> 
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>  
                                Sign Up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>  
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
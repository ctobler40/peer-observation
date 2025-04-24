import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../App.css';

function SideNav() {
  const location = useLocation();
  const [onHomePage, setOnHomePage] = useState(location.pathname === "/");

  useEffect(() => {
    setOnHomePage(location.pathname === "/");
  }, [location.pathname]);

  // Do not run anything if we are on the home page
  if (onHomePage) return null;

  return (
    <nav className="side-nav">
      <div className="side-nav-top">
        <Link to="/connections" className="side-nav-link">Connections</Link>
        <Link to="/observations" className="side-nav-link">Observations</Link>
        <Link to="/messages" className="side-nav-link">Messages</Link>
        <Link to="/invites" className="side-nav-link">Send Invites</Link>
      </div>
      <div className="side-nav-bottom">
        <Link to="/settings" className="side-nav-link">Settings</Link>
      </div>
    </nav>
  );
}

export default SideNav;

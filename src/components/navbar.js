import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;

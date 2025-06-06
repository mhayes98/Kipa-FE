import React from 'react';
import { NavLink } from 'react-router';

function NavBar() {

    return (
        <>

        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
            </NavLink>
            <NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>
                Search
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
            </NavLink>
             <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
                Register
            </NavLink>
        </nav>
        <p>____________________________________________________________</p>
        </>
    );
}

export default NavBar;
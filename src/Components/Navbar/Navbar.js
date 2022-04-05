import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link text-danger")}   to="/">Home</NavLink>
    
  </li>
  <li class="nav-item">
  <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link text-danger")}  to="/reviews">Reviews</NavLink>
    
  </li>
  <li class="nav-item">
  <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link text-danger")}  to="/dashboard">Dashboard</NavLink>
    
  </li>
  <li class="nav-item">
  <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link text-danger")}  to="/blog">Blog</NavLink>
  
  </li>
  <li class="nav-item">
  <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link text-danger")}  to="/about">About</NavLink>
  
  </li>
</ul>
            
        </div>
    );
};

export default Navbar;
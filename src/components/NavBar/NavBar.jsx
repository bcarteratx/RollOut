import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/inventory' className='NavBar-link'>Your Inventory</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/additem' className='NavBar-link'>Add Item</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/addinventory' className='NavBar-link'>Add to Inventory</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>Login</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;

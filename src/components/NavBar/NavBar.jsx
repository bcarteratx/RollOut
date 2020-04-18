import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Menu, Segment } from 'semantic-ui-react'

// export default class NavBar extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => {
//     this.setState({ activeItem: name })
//   }

//   render() {
//     const { activeItem } = this.state

//     return (
//       <div>
//         <Menu pointing secondary>
//           <Menu.Item
//             as={Link} to='/'
//             name='home'
//             active={activeItem === 'home'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             as={Link} to='/inventory'
//             name='inventory'
//             active={activeItem === 'inventory'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             as={Link} to='/addinventory'
//             name='Add to Inventory'
//             active={activeItem === 'Add to Inventory'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Menu position='right'>
//             <Menu.Item
//               name={`Welcome, ${this.props.user.name}`}            
//             />            
//             <Menu.Item
//               as={Link} to='/logout'
//               name='Log Out'
//               active={activeItem === 'logout'}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               as={Link} to='/login'
//               name='Log In'
//               active={activeItem === 'login'}
//               onClick={this.handleItemClick}
//             />
//           </Menu.Menu>
//         </Menu>
//       </div>
//     )
//   }
// }


const NavBar = (props) => {
  
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/inventory' className='NavBar-link'>Your Inventory</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/addinventory' className='NavBar-link'>Add to Inventory</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/additem' className='NavBar-link'>Store</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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

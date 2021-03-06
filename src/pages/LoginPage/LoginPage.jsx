import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './LoginPage.css';
import * as userService from '../../services/userService';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      
      <LoginForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
      
      // <div className="LoginPage">
      //   <header>Log In</header>
      //   <form onSubmit={this.handleSubmit} >
      //     <div>
      //       <input 
      //         type="email" 
      //         placeholder="Email"
      //         value={this.state.email} 
      //         name="email" 
      //         onChange={this.handleChange} 
      //       />
      //     </div>
      //     <div>
      //       <input 
      //         type="password"
      //         placeholder="Password" 
      //         value={this.state.pw} 
      //         name="pw" 
      //         onChange={this.handleChange} 
      //       />
      //     </div>
      //     <div>
      //       <button>Log In</button>
      //       &nbsp;&nbsp;&nbsp;
      //       <Link to='/'>Cancel</Link>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default LoginPage;

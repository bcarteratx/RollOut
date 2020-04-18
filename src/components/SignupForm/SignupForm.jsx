import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';


class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ width: 350, maxWidth: 450 }}>
        <Header as='h2' color='orange' textAlign='center'>
          <Image src='images/toilet-paper.png' /> Sign Up
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
              <Form.Input 
                fluid icon='user'
                iconPosition='left'
                type="text"
                placeholder="Name" 
                value={this.state.name} 
                name="name" 
                onChange={this.handleChange} 
              />
              <Form.Input 
                fluid icon='user'
                iconPosition='left'
                type="email"
                placeholder="Email" 
                value={this.state.email} 
                name="email" 
                onChange={this.handleChange}
              />
              <Form.Input 
                fluid icon='lock'
                iconPosition='left'
                type="password" 
                placeholder="Password" 
                value={this.state.password} 
                name="password" 
                onChange={this.handleChange} 
              />
              <Form.Input
                fluid icon='lock'
                iconPosition='left'
                type="password" 
                placeholder="Confirm Password" 
                value={this.state.passwordConf} 
                name="passwordConf" 
                onChange={this.handleChange} 
              />
              <Button
                color='orange' fluid size='large' 
                disabled={this.isFormInvalid()}       
              >
                Sign Up
              </Button>
              &nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupForm;

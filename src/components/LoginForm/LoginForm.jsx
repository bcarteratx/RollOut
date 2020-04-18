
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = (props) => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='orange' textAlign='center'>
        <Image src='' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={props.handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid icon='user'
            iconPosition='left'
            placeholder='E-mail address'
            name="email"
            onChange={props.handleChange}

          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="pw"
            onChange={props.handleChange}
          />

          <Button color='orange' fluid size='large'>
            Login
          </Button>
          <Link to='/'>Cancel</Link>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to='/signup'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm
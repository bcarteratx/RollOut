import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ItemsPage from '../ItemsPage/ItemsPage'
import * as itemsAPI from '../../services/items-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    items: ['Charmin', 'Lysol'],
  };

  /*--------------------------- Callback Methods ---------------------------*/
  
  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }
  
  handleAddItem = async newItemData => {
    const newItem = await itemsAPI.create(newItemData)
    this.setState(state => ({
      items: [...this.state.items, newItem]
    }), () => this.props.history.push('/'));
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/
  
  async componentDidMount() {
    const items = await itemsAPI.index();
    this.setState({ items });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to Rollout</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/inventory' render={({ history }) => 
            userAPI.getUser() ? 
              <ItemsPage
                history={history}
                title={'Inventory List'}
                items={this.state.items}
                handleAddItem={this.state.handleAddItem}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={() =>
            <h3>This is the home page</h3>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

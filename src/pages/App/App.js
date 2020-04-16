import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import InventoryPage from '../InventoryPage/InventoryPage';
import AddInventoryPage from '../AddInventoryPage/AddInventoryPage';
import ItemsPage from '../ItemsPage/ItemsPage';
import AddItemPage from '../AddItemPage/AddItemPage';
import EditItemPage from '../EditItemPage/EditItemPage';
import * as inventoryAPI from '../../services/inventory-api';
import * as itemsAPI from '../../services/items-api';
import * as userAPI from '../../services/userService';
import * as userService from '../../services/userService';
import NavBar from '../../components/NavBar/NavBar';
import Item from '../../components/Item/Item';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userService.getUser(),
    inventory: [],
    items: [],
  };

  /*--------------------------- Callback Methods ---------------------------*/
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleAddItem = async newItemData => {
    const newItem = await inventoryAPI.create(newItemData)
    this.setState(state => ({
      items: [...state.items, newItem]
    }), () => this.props.history.push('/'));
  }

  handleAddInventory = async newInvtData => {
    const newInvt = await inventoryAPI.create(newInvtData);
    this.setState(state => ({
      inventory: [...state.inventory, newInvt]
    }), () => this.props.history.push('/inventory'));
  }

  handleDeleteItem = async id => {
    await itemsAPI.deleteOne(id);
    this.setState(state => ({
      items: state.items.filter(i => i._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleDeleteInventory= async id => {
    await inventoryAPI.deleteOne(id);
    this.setState(state => ({
      inventory: state.inventory.filter(i => i._id !== id)
    }), () => this.props.history.push('/inventory'));
  }

  handleUpdateItem = async updateItemData => {
    const updateItem = await itemsAPI.update(updateItemData);
    const newItemArray = this.state.items.map( i =>
      i._id === updateItem._id ? updateItem : i);
    this.setState(
      {items: newItemArray},
      () => this.props.history.push('/')
    );
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/
  
  async componentDidMount() {
    const items = await itemsAPI.index();
    this.setState({ items });
    const inventory = await inventoryAPI.getAll();
    this.setState({ inventory });
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
              <InventoryPage
                history={history}
                title={'Inventory List'}
                user={this.state}
                inventory={this.state.inventory}
                handleDeleteInventory={this.handleDeleteInventory}
                />
                :
                <Redirect to='/login'/>
              }/>
          <Route exact path='/addinventory' render={({ history }) => 
            <AddInventoryPage
              history={history}
              title={'Add Item'}
              items={this.state.items}
              handleAddInventory={this.handleAddInventory}
            />
          }/>
          {/* <Route exact path='/edit' render={({history, location}) => 
            <EditInventoryPage
                handleUpdateItem={this.handleUpdateItem}
                location={location}
                history={history}
              />
          } /> */}
          <Route exact path='/' render={({ history }) =>
            <ItemsPage
              history={history}
              title={'Item List'}
              items={this.state.items}
              inventory={this.state.inventory}
              handleAddItem={this.handleAddItem}
              handleDeleteItem={this.handleDeleteItem}
            />
          }/>
          <Route exact path='/additem' render={({ history }) => 
            userAPI.getUser() ? 
              <AddItemPage
                history={history}
                title={'Add Item'}
                items={this.state.items}
                handleAddItem={this.handleAddItem}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/edit' render={({history, location}) => 
            <EditItemPage
                handleUpdateItem={this.handleUpdateItem}
                location={location}
                history={history}
              />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;

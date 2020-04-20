import React, {Component} from 'react';
import './AddInventoryPage.css'
import InventoryForm from '../../components/InventoryForm/InventoryForm';

class AddInventoryPage extends Component {
  state = {
    // invalidForm: true,
    formData: {
      name: '',
      size: '',
      quantity: '',
      inStock: true,
    }
  }
  // formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddInventory(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      // invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render () {
    return (
      <div className='AddInventoryPage'>
        <div>
          <h1>Add Your Rolls Here</h1>
          <InventoryForm
            className='AddInvnetoryPage-Form'
            handleAddInventory={this.props.handleAddInventory}
          />
        </div>
      </div>
    )
  }
}

export default AddInventoryPage;
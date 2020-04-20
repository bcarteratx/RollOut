import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';


class InventoryForm extends Component {
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

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      // invalidForm: !this.formRef.current.checkValidity()
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddInventory(this.state.formData)
  }


  render () {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Product Name:</label>
          <input 
            placeholder='Product Name'
            name='name' 
            value={this.state.formData.name} 
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Roll Size:</label>
          <input 
            placeholder='Roll Size'
            name='size' 
            value={this.state.formData.size} 
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Roll Quantity:</label>
          <input 
            placeholder='Roll Quantity'
            name='quantity' 
            value={this.state.formData.quantity} 
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Button
          basic color='black'
          type='submit'
          disabled={this.state.invalidForm}
        >Add Item</Button>   
      </Form>
    )
  }
}

export default InventoryForm
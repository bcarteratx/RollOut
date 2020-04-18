import React, {Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';


class AddItem extends Component {
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
    this.props.handleAddItem(this.state.formData)
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
        <Form.Field>
          <label>Is Item in Stock:</label>
          <Checkbox 
            label='Is this item in stock?'
            name='inStock' 
            value={this.state.formData.inStock} 
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button
          type='submit'
          disabled={this.state.invalidForm}
        >Add Item</Button>   
      </Form>
    )
  }
}

export default AddItem
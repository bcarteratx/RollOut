import React, {Component} from 'react'


class AddItem extends Component {
  state = {
    formData: {
      name: '',
      size: '',
      quantity: '',
      householdSize: '',
    }
  }

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddItem(this.state.formData)
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <span>Product Name:</span>
        <input 
          name='name' 
          value={this.state.formData.name} 
          onChange={this.handleChange}
        />
        <span>Product Size:</span>
        <input 
          name='size'
          value={this.state.formData.size}
          onChange={this.handleChange}
        />
        <span>Product Quantity:</span>
        <input 
          name='quantity'
          value={this.state.formData.quantity}
          onChange={this.handleChange}
        />
        <span>How many people in your Household use this:</span>
        <input 
          name='householdSize'
          value={this.state.formData.householdSize}
          onChange={this.handleChange}
        />
        <br/>
        <input type='submit' value='Add Item' />
      </form>
    )
  }
}

export default AddItem
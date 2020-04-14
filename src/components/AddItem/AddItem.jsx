import React, {Component} from 'react'


class AddItem extends Component {
  state = {
    // invalidForm: true,
    formData: {
      name: '',
      size: '',
      quantity: '',
      inStock: '',
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
      <form onSubmit={this.handleSubmit} className='form'>
        <span>Product Name:</span>
        <input 
          name='name' 
          value={this.state.formData.name} 
          onChange={this.handleChange}
          required
        />
        <br/>
        <span>Product Size:</span>
        <input 
          name='size'
          value={this.state.formData.size}
          onChange={this.handleChange}
          required
        />
        <br/>
        <span>Product Quantity:</span>
        <input 
          name='quantity'
          value={this.state.formData.quantity}
          onChange={this.handleChange}
          required
        />
        <br/>
        <span>Is Item in Stock:</span>
        <input
          type='checkbox'
          name='inStock'
          value={this.state.formData.inStock}
          onChange={this.handleChange}
        />
        <br/>
        <input
          type='submit'
          value='Add Item'
          disabled={this.state.invalidForm}
          />
      </form>
    )
  }
}

export default AddItem
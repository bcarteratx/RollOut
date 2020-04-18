import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form} from 'semantic-ui-react';


class EditInventoryPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.item,
    idx: this.props.location.idx
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateInventory(this.state.formData, this.state.idx, this.props.location.state.item._id);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      // invalidForm: !this.formRef.current.checkValidity()
    });
  };

render() {
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
          type='submit'
          disabled={this.state.invalidForm}
        >Update Item</Button>   
      </Form>
    // <>
    //   <EditInventory
    //     handleUpdateInventory={this.props.handleUpdateInventory}
    //     formData={this.state.formData}
    //   />
    // </>
    // <>
    //   <h1>Edit Item</h1>
    //   <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
    //     <div className="">
    //       <label>Name</label>
    //       <input
    //         name="name"
    //         value={this.state.formData.name}
    //         onChange={this.handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="">
    //       <label>Size</label>
    //       <input
    //         name="size"
    //         value={this.state.formData.size}
    //         onChange={this.handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Quantity</label>
    //       <input
    //         name="quantity"
    //         value={this.state.formData.quantity}
    //         onChange={this.handleChange}
    //         required
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       disabled={this.state.invalidForm}
    //     >
    //       UPDATE ITEM
    //     </button>&nbsp;&nbsp;
    //     <Link to='/inventory'>CANCEL</Link>
    //   </form>
    // </>
  );
}
}

export default EditInventoryPage;
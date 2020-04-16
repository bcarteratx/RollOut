import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditItemPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.items
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateItem(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

render() {
  return (
    <>
      <h1>Edit Item</h1>
      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Item Name</label>
          <input
            className="form-control"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Size</label>
          <input
            className="form-control"
            name="breed"
            value={this.state.formData.size}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Quantity</label>
          <input
            className="form-control"
            name="age"
            value={this.state.formData.quantity}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-xs"
          disabled={this.state.invalidForm}
        >
          UPDATE ITEM
        </button>&nbsp;&nbsp;
        <Link to='/'>CANCEL</Link>
      </form>
    </>
  );
}
}

export default EditItemPage;
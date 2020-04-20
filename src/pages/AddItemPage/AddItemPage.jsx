import React from 'react';
import AddItem from '../../components/AddItemForm/AddItemForm';
import './AddItemPage.css';


const AddItemPage = (props) => {
  return (
    <React.Fragment>
      <div className='AddItemPage'>
        <AddItem 
          className='AddItemPage-Item'
          handleAddItem={props.handleAddItem}
        />
      </div>
    </React.Fragment>
  );
}
 
export default AddItemPage;

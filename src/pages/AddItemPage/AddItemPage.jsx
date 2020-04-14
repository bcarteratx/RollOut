import React from 'react';
import AddItem from '../../components/AddItem/AddItem';

const AddItemPage = (props) => {
  return (
    <React.Fragment>
      <AddItem 
        handleAddItem={props.handleAddItem}
      />
    </React.Fragment>
  );
}
 
export default AddItemPage;

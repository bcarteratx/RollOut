import React from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
// import AddItem from '../../components/AddItem/AddItem';

const InventoryPage = (props) => {
  return (
    <React.Fragment>
      <InventoryList 
        items={props.items}
      />
      {/* <AddItem 
        handleAddItem={props.handleAddItem}
      /> */}
    </React.Fragment>
  );
}
 
export default InventoryPage;

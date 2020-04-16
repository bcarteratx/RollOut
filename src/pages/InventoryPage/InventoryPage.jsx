import React from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
// import AddItem from '../../components/AddItem/AddItem';

const InventoryPage = (props) => {
  return (
    <React.Fragment>
      <InventoryList 
        inventory={props.inventory}
        handleDeleteInventory={props.handleDeleteInventory}
      />
    </React.Fragment>
  );
}
 
export default InventoryPage;

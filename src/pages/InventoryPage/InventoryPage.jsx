import React from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
// import AddItem from '../../components/AddItem/AddItem';

const InventoryPage = (props) => {
  return (
    <React.Fragment>
      <InventoryList
        user={props.user}
        inventory={props.inventory}
        handleDeleteInventory={props.handleDeleteInventory}
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
      />
    </React.Fragment>
  );
}
 
export default InventoryPage;

import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem.jsx'


function InventoryList(props){
    return (
      <>
          <h1>{`${props.user.name}'s Inventory List`}</h1>
          <div>
              {props.inventory.map((item, idx) =>
                  <InventoryItem
                      key={item._id}
                      idx={idx}
                      item={item}
                      user={props.user}
                      handleDeleteInventory={props.handleDeleteInventory}
                      handleIncrement={props.handleIncrement}
                      handleDecrement={props.handleDecrement}
                  />
              )}
          </div>
      </>
  );
  // }else{
  //   return (
  //     <h1>Oh No! You are out of Rolls!</h1>
    // )
  
}

export default InventoryList
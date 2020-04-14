import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem.jsx'


function InventoryList(props){
  if(props.inventory.length){
  return (
    <div className='container'>
    <h1>Items In My Inventory</h1>
      {/* <table className='table tbl'>
        <tbody> */}
        {/* {props.inventory.map(inventory =>  */}
          {/* <tr>
          <InventoryItem 
            item = {item} 
            key = {item._id} */}
            {/* // handleDeleteItem = {props.handleDeleteItem}
            // handleUpdateItem = {props.handleUpdateItem}
          /> */}
          {/* </tr> */}
        {/* )}
        </tbody> */}
      {/* </table> */}
    </div>
  )
  }else{
    return (
      <h1>Oh No! You are out of Rolls!</h1>
    )
  }
}

export default InventoryList
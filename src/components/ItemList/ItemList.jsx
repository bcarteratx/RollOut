import React from 'react';
import Item from '../Item/Item'


function ItemList(props){
  if(props.items.length){
  return (
    <div className='container'>
    <h1>Items In Stock right now</h1>
      <table className='table tbl'>
        <tbody>
        {props.items.map(item => 
          <tr>
          <Item 
            item = {item} 
            key = {item._id}
            // handleDeleteItem = {props.handleDeleteItem}
            // handleUpdateItem = {props.handleUpdateItem}
          />
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
  }else{
    return (
      <h1>You don't have anything in your inventory!</h1>
    )
  }
}

export default ItemList
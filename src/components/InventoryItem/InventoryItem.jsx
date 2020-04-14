import React from 'react';

const IventoryItem = (props) => {
  return (
    <React.Fragment>
      <h3>{props.inventory.item.name}</h3>
      <div className=''>
            <td>
                <th>Size:</th>
                <tr>{props.item.size}</tr>
                <th>Quantity:</th>
                <tr>{props.item.quantity}</tr>
            </td>
        </div>
    </React.Fragment>
  );
}
 
export default IventoryItem;

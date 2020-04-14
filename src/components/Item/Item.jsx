import React from 'react';

const Item = (props) => {
  return (
    <React.Fragment>
      <h3>{props.item.name}</h3>
      <div className=''>
            <td>
                <th>Size:</th>
                <tr>{props.item.size}</tr>
                <th>Quantity:</th>
                <tr>{props.item.quantity}</tr>
                <button
                  onClick={() => props.handleDeleteItem(props.item._id)}
                >DELETE</button>
            </td>
        </div>
    </React.Fragment>
  );
}
 
export default Item;

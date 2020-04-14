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
            </td>
        </div>
    </React.Fragment>
  );
}
 
export default Item;

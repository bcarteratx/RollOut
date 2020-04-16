import React from 'react';
import { Link } from 'react-router-dom';

const IventoryItem = ({ item, user, idx, handleDeleteInventory}) => {
  return (
    <React.Fragment>
      <h3>{item.name}</h3>
      <div className=''>
            <td>
                <th>Size:</th>
                <tr>{item.size}</tr>
                <th>Quantity:</th>
                <tr>{item.quantity}</tr>
            </td>
        </div>
        <div>
          <Link to={{
            pathname: '/editinventory',
            state: {item},
            idx: idx
          }}
          >UPDATE</Link>
          <button onClick={() => handleDeleteInventory(item._id, idx)}
          >DELETE</button>
        </div>
    </React.Fragment>
  );
}
 
export default IventoryItem;

import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link
                  className='btn btn-xs btn-warning'
                  to={{
                    pathname: '/edit',
                    state: (props.items)
                  }}
                >EDIT
                </Link>
                <button
                  onClick={() => props.handleDeleteItem(props.item._id)}
                >DELETE
                </button>
                
            </td>
        </div>
    </React.Fragment>
  );
}
 
export default Item;

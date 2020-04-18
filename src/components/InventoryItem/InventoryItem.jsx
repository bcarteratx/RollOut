import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './InventoryItem.css';
const paragraph = <Image src='' />

const InventoryItem = ({ item, user, idx, handleDeleteInventory}) => (
  <Item.Group divided>
   
    <Item>
      <Item.Image className='Invt-img' src='/images/toilet-paperX3.png' />

      <Item.Content>
        <Item.Header as='a'>{item.name}</Item.Header>
        <Item.Meta>
          <span className=''>{`${item.size} Roll`}</span>
        </Item.Meta>
        <Item.Description>{`${item.quantity} rolls left`}</Item.Description>
        <Item.Extra>
          <Button
            primary floated='right'
            as={Link} to={{
              pathname: '/editinventory',
              state: {item},
              idx: idx
            }}  
            >
            Edit Item
            <Icon name='right chevron' />
          </Button>
          <Label>{`${item.quantity} rolls left`}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default InventoryItem 

// import React from 'react';
// import { Link } from 'react-router-dom';

// const InventoryItem = ({ item, user, idx, handleDeleteInventory}) => {
//   return (
    
//     <React.Fragment>
//       <h3>{item.name}</h3>
//       <div className=''>
//             <td>
//                 <th>Size:</th>
//                 <tr>{item.size}</tr>
//                 <th>Quantity:</th>
//                 <tr>{item.quantity}</tr>
//             </td>
//         </div>
//         <div>
//           <Link to={{
//             pathname: '/editinventory',
//             state: {item},
//             idx: idx
//           }}
//           >UPDATE</Link>
//           <button onClick={() => handleDeleteInventory(item._id, idx)}
//           >DELETE</button>
//         </div>
//     </React.Fragment>
//   );
// }
 
// export default InventoryItem;

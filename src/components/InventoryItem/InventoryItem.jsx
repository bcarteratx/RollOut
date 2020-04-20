import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './InventoryItem.css';


const InventoryItem = ({ item, user, idx, handleDeleteInventory, handleDecrement, handleIncrement}) => (
  <Item.Group divided>
    <Item>
      <Item.Image 
        className='Invt-img' 
        src={
          item.quantity > 10 
            ? '/images/toilet-paperX3.png' 
            : 
            (item.quantity > 5 
              ? '/images/toilet-paperX2.png' 
              : 
              (item.quantity > 1
                ? '/images/toilet-paperX1.png'
                : '/images/poop-emoji.png'
              )
            ) 
        } 
      />
      <Item.Content>
        <Item.Header>{item.name}</Item.Header>
        <Item.Meta>
          <span className=''>{`${item.size} Roll`}</span>
        </Item.Meta>
        <Item.Extra>
          <Button color={item.quantity < 5 ? 'red' : 'secondary' } >{`${item.quantity} rolls left`}</Button>
          <Button
            color='orange' floated='left'
            as={Link} to={{
              pathname: '/editinventory',
              state: {item},
              idx: idx
            }}  
            >
            Edit Item
            <Icon name='right chevron' />
          </Button>
          <Button 
            basic color='red' floated=''
            onClick={() => handleDeleteInventory(item._id, idx)}
            >
            DELETE
          </Button>
        </Item.Extra>
        {/* Add Incrementing/Decrementing Buttons Below */}
        {/* <Button.Group size='large'>
          <Button 
            basic color='red'
            onClick={() => handleDecrement(item._id, idx)}
            >-</Button>
          <Button.Or />
          <Button 
            basic color='green' 
            onClick={() => handleIncrement(item._id, idx)}
          >+</Button>
        </Button.Group> */}
      </Item.Content>
    </Item>
  </Item.Group>
)

export default InventoryItem 


// Refactor as class component for Increment/Decrement feature below

// class InventoryItem extends Component {
//   state = {
    
//   }

  // handleIncrement = e => {
  //   const rollCount = {...this.state.rollCount, [e.target.name]: e.target.value + 1};
  //   this.setState({
  //     rollCount
  //   });
  // };

//   changeImg() {
//     if (this.props.item.quantity > 17) {
//       return '/images/toilet-paperX3.png' 
//     } else if (this.props.item.quantity > 5) {
//       return '/images/toilet-paperX2.png' 
//       } else if (this.props.item.quantity > 1) {
//         return'/images/toilet-paperX1.png'
//     } else {
//       return '/images/poop-emoji.png'
//     }    
//   }

//   render(props) { 
//     return (
//       <Item.Group divided>
//       <Item>
//         <Item.Image 
//           className='Invt-img' 
//           src={
//            this.changeImg()
//           } 
//         />
//         <Item.Content>
//           <Item.Header as='a'>{this.props.item.name}</Item.Header>
//           <Item.Meta>
//             <span className=''>{`${this.props.item.size} Roll`}</span>
//           </Item.Meta>
//           <Item.Description>{`${this.props.item.quantity} rolls left`}</Item.Description>
//           <Item.Extra>
//             <Button color={this.props.item.quantity < 5 ? 'red' : '' } >{`${this.props.item.quantity} rolls left`}</Button>
//             <Button
//               primary floated='right'
//               as={Link} to={{
//                 pathname: '/editinventory',
//                 state: this.props.item,
//                 idx: this.props.idx
//               }}  
//               >
//               Edit Item
//               <Icon name='right chevron' />
//             </Button>
//             <Button 
//               primary floated=''
//               onClick={() => this.props.handleDeleteInventory(this.props.item._id, this.props.idx)}
//               >
//               DELETE
//             </Button>
//           </Item.Extra>
//           <Button.Group size='large'>
//             <Button 
//               basic color='red'
//               onClick={() => this.props.handleDecrement(this.props.item._id, this.props.idx)}
//               >-</Button>
//             <Button.Or />
//             <Button 
//               basic color='green' 
//               onClick={() => this.props.handleIncrement(this.props.item._id, this.props.idx)}
//             >+</Button>
//           </Button.Group>
//         </Item.Content>
//       </Item>
//     </Item.Group>
//     );
//   }
// }
 
// export default InventoryItem;

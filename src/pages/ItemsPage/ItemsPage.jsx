import React from 'react';
import ItemList from '../../components/ItemList/ItemList';
import AddItem from '../../components/AddItem/AddItem';

const ItemsPage = (props) => {
  return (
    <React.Fragment>
      <ItemList 
        items={props.items}
      />
      <AddItem 
        handleAddItem={props.handleAddItem}
      />
    </React.Fragment>
  );
}
 
export default ItemsPage;

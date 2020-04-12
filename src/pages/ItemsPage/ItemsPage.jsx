import React from 'react';
import ItemList from '../../components/ItemList/ItemList';

const ItemsPage = (props) => {
  return (
    <React.Fragment>
      <ItemList 
        items={props.items}
      />
    </React.Fragment>
  );
}
 
export default ItemsPage;

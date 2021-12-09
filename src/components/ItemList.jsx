import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {


    return (
        <div className="row">
          {items ? items.map((item) =>(
            <Item key={item.id} item={item} />
          )): <div className="container bg-succsess"><h1> Cargando ...</h1></div>}
        </div>
    )
}

export default ItemList
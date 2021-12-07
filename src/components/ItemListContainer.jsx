import React, {useState} from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {


    return (
        <div className="container-fluid border border-danger">
            <h1 className="text-capitalize">{greeting}</h1>
            <div className="row">
                <ItemCount title="dinoItem 01" stock="4"/>
                <ItemCount title="dinoItem 02" stock="3"/>
                <ItemCount title="dinoItem 03" stock="0"/>
            </div>
        </div>
    )
}

export default ItemListContainer

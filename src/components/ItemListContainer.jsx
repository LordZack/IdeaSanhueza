import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container-fluid border border-danger">
            <h1 className="text-capitalize">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer

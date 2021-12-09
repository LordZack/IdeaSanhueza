import React from 'react'

const Item = ({item}) => {
    return (
        <div className="col col-md-6 col-lg-4 my-2">
            <div classname="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title test-uppercase"> {item.name}</h5>
                    <h6 className="card-subtitle" mb-2 text-muted text-uppercase>{item.category}</h6>
                    <p className="card-text fs-3">${item.price}</p>
                </div>
                <button className="btn btn-warning w-100 ">Ver Detalle</button>
            </div>
        </div>
    )
}

export default Item

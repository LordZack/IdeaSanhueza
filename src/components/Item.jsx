import React from 'react'

const Item = ({item}) => {
    return (
        <div className="col col-md-6 col-lg-4 my-2 border border-success border-2">
            <div classname="card">
                <img src={item.img} className="card-img-top rounded-pill" alt="..." />
                <div className="card-body">
                    <h5 className="card-title test-uppercase"> {item.name}</h5>
                    <h6 className="card-subtitle" mb-2 text-muted text-uppercase>{item.category}  Stock : {item.stock}</h6>
                    <p className="card-text fs-3">${item.price}</p>
                    <div class="text-center">
                    <a href="#" className="btn btn-success">Ver Detalle</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Item

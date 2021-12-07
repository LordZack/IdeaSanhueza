import React, {useState} from 'react';

const ItemCount = ({stock, title}) => {

    const [contador, setContador]=useState(0);


    function lessItem(){
        contador <= 0 ? setContador(0) : setContador(contador - 1);
    }

    function addItem(){
        contador >= stock ? setContador(stock) : setContador(contador + 1);
    }    


    return (
      
            <div className="col">
                <div className="card text-white bg-success mb-3">
                    <div className="row">
                        <div className="card-header">{title}</div>
                    </div>
                    <div className="card-body">
                    <div className="card-text">Stock disponible: {stock}</div>
                        <div class="input-group mb-3">
                            <button onClick={() => lessItem()}> <i className="fas fa-minus"></i> </button>
                            <input type="number" min="0" max={stock} placeholder="0" value={contador} />
                            <button onClick={() => addItem()}> <i className="fas fa-plus"></i> </button>
                        </div>  
                    </div>
                </div>
            </div>
        
    )
}

export default ItemCount

import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {


const arrayDinoProductos = [
    {
        id:1,
        name:"dino Producto 01",
        stock: 2,
        price: 2000,
        img: "https://as01.epimg.net/meristation/imagenes/2020/12/31/noticias/1609429630_243049_1609429733_noticia_normal.jpg",
        category: "Dinosaurios"
    },
    {
        id:2,
        name:"dino Producto 02",
        stock: 5,
        price: 1000,
        img: "https://as01.epimg.net/meristation/imagenes/2020/12/31/noticias/1609429630_243049_1609429733_noticia_normal.jpg",
        category: "Dinosaurios"
    },
    {
        id:3,
        name:"dino Producto 03",
        stock: 0,
        price: 6000,
        img: "https://as01.epimg.net/meristation/imagenes/2020/12/31/noticias/1609429630_243049_1609429733_noticia_normal.jpg",
        category: "Dinosaurios"
    },
];

    const [data, setData]=useState(null);

    let promise= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arrayDinoProductos);
        }, 3000);
    });

    const resolverArray = async ()=>{
        try{
            const data= await promise;
            setData(data);

        }catch(err){
            throw err;
        }finally{
            console.log("la peticion fue ejecutada exitosamente");
        }
    };

    useEffect(() => {
        resolverArray();
    }, []);

    return (
        <div className="bg-venom full-height">
            <ItemList items={data}/>
        </div>
    )
}

export default ItemListContainer

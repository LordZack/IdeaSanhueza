import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {


const arrayDinoProductos = [
    {
        id:1,
        name:"Dino Producto 01",
        stock: 2,
        price: 2000,
        img: "https://as01.epimg.net/meristation/imagenes/2020/12/31/noticias/1609429630_243049_1609429733_noticia_normal.jpg",
        category: "Dinosaurios"
    },
    {
        id:2,
        name:"Dino Producto 02",
        stock: 5,
        price: 1000,
        img: "https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FhGxaNJo4e0v1OoIJhkZYraCTECc%3D%2F3888x2592%2Ffilters%3Afill%28auto%2C1%29%2Fyoung-boy-wearing-safari-outfit-playing-with-toy-dinosaurs--182873046-5b734f39c9e77c0025031a80.jpg&width=750",
        category: "Dinosaurios"
    },
    {
        id:3,
        name:"Dino Producto 03",
        stock: 0,
        price: 6000,
        img: "https://www.enter.co/wp-content/uploads/2021/02/la_era_de_hielo_4-1104x621.jpg",
        category: "Era del Hielo"
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

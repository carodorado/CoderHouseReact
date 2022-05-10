import { useEffect, useState } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'


function ItemList(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const products = [
        { id:'01', name:'Comedero Woof', category:'Implementos', description:'Comedero metalico para mascota',stock:5, price:45000, image:'bowlazul.png'},
        { id:'02', name:'Pelota Colorida', category:'Juguetes', description:'Pelota de goma antiestres',stock:8, price:15000, image:'pelota.png'},
        { id:'03', name:'Collar Cuerina', category:'Accesorios', description:'Collar en imitacion cuero',stock:4, price:30000, image:'collar.png'}
    ]

    const getFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
         }, 3000);
    })

    useEffect(() => {
        getFetch
        .then(answer => setItems(answer))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
    }, [])

    return(
        <div className="CardContainer">
            {loading ? 
            <div className="load">
                <h3>Cargando</h3>
                <img className="loader first" src={require('../../images/huella.png')}/>
                <img className="loader  second" src={require('../../images/huella.png')}/>
                <img className="loader third" src={require('../../images/huella.png')}/>
            </div> 
            : items.map(element => 
                <Item   
                    key={element.id}
                    name={element.name}
                    category={element.category}
                    description={element.description}
                    stock={element.stock}
                    price={element.price}
                    image={element.image}
                />)} 
        </div>
    )
}

export default ItemList;
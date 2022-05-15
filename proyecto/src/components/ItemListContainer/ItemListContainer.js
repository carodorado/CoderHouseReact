import { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList.js'

function ItemListContainer({setShowDetail}){

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
        <div>
            <ItemList loading={loading} items={items}/>
        </div>
    )
}

export default ItemListContainer;
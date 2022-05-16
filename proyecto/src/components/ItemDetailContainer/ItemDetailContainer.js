import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { products } from '../../data/products';

function ItemDetailContainer(){
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id));
         }, 2000);
    })

    useEffect(() => {
        getFetch
        .then(answer => setItem(answer))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
    }, [])

    return(
        <div>
            <ItemDetail loading={loading} item={item}/>
        </div>
    )
}

export default ItemDetailContainer;
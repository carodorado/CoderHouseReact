import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList.js'
import { products } from '../../data/products';

function ItemListContainer({setShowDetail}){
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);  

    const getFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
         }, 200);
    })

    useEffect(() => {
        if(categoryId){
            getFetch
            .then(answer => setItems(answer.filter(product => product.category === categoryId)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
        } else {
            getFetch
            .then(answer => setItems(answer))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
        }

    }, [categoryId])

    return(
        <div>
            <ItemList loading={loading} items={items}/>
        </div>
    )
}

export default ItemListContainer;
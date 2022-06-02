import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList.js'
import { getFirestore, doc, collection, getDoc, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer({setShowDetail}){
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        if(categoryId) {            
            const queryCollectionFilter = query(queryCollection, where('category','==', categoryId))
            getDocs(queryCollectionFilter)
            .then(answer => setItems( answer.docs.map(item => ({id: item.id, ...item.data()}) )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
        } else {
            getDocs(queryCollection)
            .then(answer => setItems( answer.docs.map(item => ({id: item.id, ...item.data()}) )))
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
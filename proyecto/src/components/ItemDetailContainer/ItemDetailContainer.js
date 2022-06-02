import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import Loader from '../Loader/Loader.js'

import './ItemDetailContainer.css'

function ItemDetailContainer(){
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'products', id)
        getDoc(dbQuery)
        .then(answer => setItem({id: answer.id, ...answer.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [id])

    return(
        <div className="item-detail-container">
            {loading ? 
            <Loader/>
            : 
            <ItemDetail loading={loading} item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
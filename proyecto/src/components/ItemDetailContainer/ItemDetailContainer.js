import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail.js'
import Loader from '../Loader/Loader.js'

import './ItemDetailContainer.css'
import { CartContext } from '../../context/CartContext.js';

function ItemDetailContainer(){

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const {productList} = useContext(CartContext)
  
    useEffect(() => {
        const product = productList.filter(product => product.id == id)
        setItem(product[0])
        setLoading(false)
    }, [id])

    return(
        <div className="item-detail-container">
            {loading ? 
            <Loader/>
            : 
            <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
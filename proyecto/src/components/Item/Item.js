import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount.js'
import { CartContext } from '../../context/CartContext.js';

import './Item.css'

function Item({ details }) {

    const {addToCart, numberPesos} = useContext(CartContext);

    function onAdd(quantity){
        addToCart(details, quantity);
    }

    return (
        <div className='card'>
            <Link to={`/detalle/${details.id}`}>
                <div>
                    <img src={require(`../../images/${details.image}`)} alt='Comedero Azul'/>
                    <h4>{ details.name }</h4>
                    <p>{ details.description }</p>
                    <p>$ { numberPesos(details.price) }</p>
                </div>
            </Link>
            <ItemCount item={details} stock={ details.stock } initial={1} onAdd={onAdd} />         
        </div>        
    )
}

export default Item;
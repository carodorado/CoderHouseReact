import ItemCount from '../ItemCount/ItemCount.js'
import { CartContext } from '../../context/CartContext.js';
import { useContext } from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

function Item({ details }) {

    const {addToCart} = useContext(CartContext);

    function onAdd(quantity){
        addToCart(details, quantity);
        alert(`Has agregado ${quantity} productos al carrito`);
    }

    function numberPesos(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
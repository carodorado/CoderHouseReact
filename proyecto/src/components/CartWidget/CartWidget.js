import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from "../../context/CartContext";
import carrito from '../../images/icono-carrito.svg';

import './CartWidget.css';

function CartWidget(){

    const { totalQuantity } = useContext(CartContext);

    return(
        <Link className="cart-widget" to="/cart">
            <img src={ carrito } alt="icono carrito"/>
            {totalQuantity > 0 &&
                <span className="counter">{ totalQuantity }</span>}
        </Link>
    )
}

export default CartWidget;
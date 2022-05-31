import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import carrito from '../../images/icono-carrito.svg';
import { Link } from 'react-router-dom';
import './CartWidget.css';

function CartWidget(){

    const { totalQuantity } = useContext(CartContext);


    return(
        <Link className="cart-widget" to="/cart">
            <img src={ carrito } alt="icono carrito"/>
            {totalQuantity > 0 ?
                <span className="counter">{ totalQuantity }</span>
                : null}
        </Link>
    )
}

export default CartWidget;
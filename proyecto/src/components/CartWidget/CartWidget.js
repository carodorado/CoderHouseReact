import carrito from '../../images/icono-carrito.svg';
import { Link } from 'react-router-dom';

function CartWidget(){
    return(
        <Link to="/cart"><img src={ carrito } alt="icono carrito"/></Link>
    )
}

export default CartWidget;
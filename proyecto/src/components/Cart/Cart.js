import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ItemCart from '../ItemCart/ItemCart.js';
import { CartContext } from "../../context/CartContext";

import './Cart.css';

function Cart(){

    const { cartList, deleteItem, sumTotal, deleteAll, numberPesos } = useContext(CartContext);

    return (
        <>
        {cartList.length > 0 ? 
        <ul className="cart">      
            <div className="cart-title">
                <h2>Carrito</h2>
                <h3 onClick={() => {deleteAll()} }>Eliminar todo</h3>
            </div>
            {cartList.map(element => {
                return (
                    <ItemCart key={element.item.id} element={element} numberPesos={numberPesos} deleteItem={deleteItem}/>
                )
            })}
            <div className="item-cart">
                <h4>Total</h4>
                <p className="total">$ { numberPesos(sumTotal()) }</p>
            </div>
            <div className="cart-buttons">         
                <Link to='/'>
                    <button className="buy no-buy">Seguir Comprando</button>
                </Link>
                <Link to='/form'>
                    <button className="buy">Terminar Compra</button>
                </Link>           
            </div>
        </ul>
        :
        <div>
            <h5>No hay productos en el carrito</h5>
            <Link to="/"><button>Ir a Inicio</button> </Link>
        </div>
        }
        </>
    )
}

export default Cart;
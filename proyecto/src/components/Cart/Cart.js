import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import papelera from '../../images/icono-papelera.svg';

function Cart(){

    function numberPesos(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const { cartList,  deleteItem, sumTotal, deleteAll} = useContext(CartContext);

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
                    <div className="item-cart" key={ element.item.id }>
                        <div  className="left">
                        <img src={require(`../../images/${element.item.image}`)} alt='Comedero Azul'/>
                        <div>
                            <h4>{ element.item.name }</h4>
                            <p>{ element.item.description }</p>
                            <p>$ { numberPesos(element.item.price) }</p>                            
                        </div>
                        </div>
                        <div className="right">
                            <div>
                                <h4>Cantidad</h4>
                                <p>{ element.quantity }</p>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <p>$ { numberPesos( element.quantity * element.item.price ) }</p>   
                            </div>       
                            <div>
                                <button className="delete" onClick={() => {deleteItem(element.item)} }>
                                    <img className="delete" src={ papelera } alt="icono papelera"/>
                                </button>                                
                            </div>                                                
                        </div>
                    </div>
                )
            })}
            <div className="item-cart">
                <h4>Total</h4>
                <p className="total">$ { numberPesos(sumTotal()) }</p>
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
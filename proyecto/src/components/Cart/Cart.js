import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import './Cart.css';

function Cart(){

    function numberPesos(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const { cartList } = useContext(CartContext);
    return (
        <ul className="cart">
            <h2>Carrito</h2>
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
                         
                        </div>
                    </div>
                )
            })}
        </ul>
        
    )
}
export default Cart; 
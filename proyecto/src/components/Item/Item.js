import ItemCount from '../ItemCount/ItemCount.js'
import { CartContext } from '../../context/CartContext.js';
import { useContext } from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

function Item({ details }) {

    const {addToCart, cartList, productList, setProductList} = useContext(CartContext);

    function onAdd(item, quantity){
        addToCart(item, quantity);
        alert(`Has agregado ${quantity} productos al carrito`);
        let index = productList.findIndex(element => element.id === item.id);
        const newProducts = productList;
        newProducts[index].stock -= quantity;
        setProductList(newProducts);
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
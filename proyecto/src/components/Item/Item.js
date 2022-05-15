import ItemCount from '../ItemCount/ItemCount.js'
import './Item.css'
import { Link } from 'react-router-dom';

function Item({ details }) {

    return (
        <div className='card'>
            <Link to={`/detalle/${details.id}`}>
                <div>
                    <img src={require(`../../images/${details.image}`)} alt='Comedero Azul'/>
                    <h4>{ details.name }</h4>
                    <p>{ details.description }</p>
                    <p>$ { details.price }</p>
                </div>
            </Link>
            <ItemCount stock={ details.stock } initial={1}/>            
        </div>        
    )
}

export default Item;
import ItemCount from '../ItemCount/ItemCount.js'
import './Item.css'

function Item({ name, category, description, stock, price, image}) {
    return (
        <div className='card'>
            <img src={require(`../../images/${image}`)} alt='Comedero Azul'/>
            <h4>{ name }</h4>
            <p>{ description }</p>
            <p>$ { price }</p>
            <ItemCount stock={ stock } initial={1}/>            
        </div>        
    )
}

export default Item
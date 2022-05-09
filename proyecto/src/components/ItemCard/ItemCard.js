import ItemCount from '../ItemCount/ItemCount.js'
import './ItemCard.css'
import blueBowl from '../../images/bowlazul.png'

function ItemCard() {

    return (
        <div className='card'>
            <img src={ blueBowl }/>
            <h4>Comedero Woof</h4>
            <p>Comedero metalico para mascota</p>
            <p>$ 45.000</p>
            <ItemCount stock={5} initial={1}/>            
        </div>        
    )
}

export default ItemCard
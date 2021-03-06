import { useContext, useState } from 'react';

import { CartContext } from '../../context/CartContext.js';
import ItemCount from '../ItemCount/ItemCount.js'
import ItemDone from '../ItemDone/ItemDone.js'

import './ItemDetail.css'

function ItemDetail({item}){

    const [state, setState] = useState('add');
    const {addToCart, numberPesos} = useContext(CartContext);

    function onAdd(quantity){
        setState('done');
        addToCart(item, quantity);
    }

    return(
        <div className="CardContainer">
            <div className='cardDetail'>
                <img src={require(`../../images/${item.image}`)} alt='Comedero Azul'/>
                <div>
                    <h2>{ item.name }</h2>
                    <div className = 'info'>
                        <p><span>Ref: </span>{ item.reference }</p>
                        <p><span>Descripción: </span>{ item.description }</p>
                        <p><span>Material: </span>{ item.material }</p>
                        <p><span>Dimensiones: </span>{ item.size }</p>
                        <p><span>Color:</span>{ item.color }</p>
                        <p><span>Calificación: </span>{ item.rating }</p>                        
                    </div>
                    <p className='price'>$ { numberPesos(item.price) }</p>
                    {
                        state === 'add' ?
                        <ItemCount item={item} initial={1} onAdd={onAdd} state={state}/>
                        :
                        <ItemDone/>
                    }                                         
                </div>          
            </div>
        </div>
    )
}

export default ItemDetail;
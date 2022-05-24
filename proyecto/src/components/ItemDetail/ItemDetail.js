import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.js'
import ItemDone from '../ItemDone/ItemDone.js'
import './ItemDetail.css'

function ItemDetail({ loading=false, item}){

    const [state, setState] = useState('add');

    function onAdd(){
        setState('done');
    }

    function numberPesos(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
                        <ItemCount stock={ item.stock } initial={1} onAdd={onAdd} state={state}/>
                        :
                        <ItemDone/>
                    }                                         
                </div>          
            </div>
        </div>
    )
}

export default ItemDetail;
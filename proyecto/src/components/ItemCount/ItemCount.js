import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ item, stock=0, initial=1, state, onAdd }){
    const[quantity, setQuantity] = useState(initial);
    function add(){
        if(quantity < stock) {
            setQuantity(quantity + 1);
        } else {
          alert('No hay mas stock');
        }
        
    }

    function substract(){
        if(quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            alert('La cantidad no puede ser menor a 1 item'); 
        }
    }
    

    return (
        <div className = 'counter'>
            <button className='circular' onClick={substract}>-</button>
            <span>{quantity}</span>
            <button className='circular' onClick={add}>+</button>
            <p>In Stock: {stock}</p>
            <button onClick={() => {onAdd(item,quantity)} }>Agregar</button>
        </div>
    )
}

export default ItemCount;
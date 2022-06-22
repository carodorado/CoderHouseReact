import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './ItemCount.css';

function ItemCount({ item, initial=1, onAdd }){
    
    const[quantity, setQuantity] = useState(initial);
    const MySwal = withReactContent(Swal)

    function add(){
        if(quantity < item.stock) {
            setQuantity(quantity + 1);
        } else {
            MySwal.fire({
                title: '¡ Ups..!',
                text: `No hay mas stock de este producto.`
              });
        }        
    }

    function substract(){
        if(quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            MySwal.fire({
                title: '¡ Ups..!',
                text: `La cantidad no puede ser menor a un item.`
              });
        }
    }    

    return (
        <div className = 'counter'>
            <button className='circular' onClick={substract}>-</button>
            <span>{quantity}</span>
            <button className='circular' onClick={add}>+</button>
            <p>In Stock: {item.stock}</p>
            <button onClick={() => {onAdd(quantity)} }>Agregar</button>
        </div>
    )
}

export default ItemCount;
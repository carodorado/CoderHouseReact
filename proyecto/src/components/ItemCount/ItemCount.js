import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock=0, initial=1 }){
    const[amount, setAmount] = useState(initial);
    
    function add(){
        if(amount < stock) {
            setAmount(amount + 1);
        } else {
          alert('No hay mas stock');
        }
    }

    function substract(){
        if(amount > 1) {
            setAmount(amount - 1);
        } else {
            alert('La cantidad no puede ser menor a 1 item'); 
        }
    }

    function addToCart(){
        alert(`Has agregado ${amount} productos al carrito`);
    }

    return (
        <div>
            <button className='circular' onClick={substract}>-</button>
            <span>{amount}</span>
            <button className='circular' onClick={add}>+</button>
            <p>In Stock: {stock}</p>
            <button onClick={addToCart}>Agregar</button>
        </div>
    )
}

export default ItemCount;
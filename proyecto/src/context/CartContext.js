import { createContext, useEffect, useState } from 'react';
import { products } from '../data/products';

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [productList, setProductList] = useState(products)
    const [totalQuantity, setTotalQuantity] = useState(0)

    function repeated(id){
        return cartList.some(element => element.item.id === id)
    }

function addToCart(item, quantity){
    let i = productList.findIndex(element => element.id === item.id);
    const newProducts = productList;
    newProducts[i].stock -= quantity;
    setProductList(newProducts);    

    if( repeated(item.id) ){
        let index = cartList.findIndex(element => element.item.id === item.id);
        const newCartList = cartList;
        newCartList[index].quantity += quantity;
        setCartList(newCartList);

    } else {
        const newItem = {item, quantity}
        setCartList([...cartList, newItem])
    }

    
}

useEffect(()=>{
    setTotalQuantity(sumQuantity());
}, [cartList])

function deleteItem(item){   
    setCartList(cartList.filter(element => element.item.id !== item.id))
}

function sumQuantity(){
    let sum = 0;
    cartList.forEach(element => {
        sum += element.quantity;
    })
    return sum;   
}

function sumTotal(){
    let sum = 0;
    cartList.forEach(element => {
        sum += element.item.price * element.quantity;
    })
    return sum;
}

function deleteAll(){
    setCartList([]);
    setTotalQuantity(0);
}

    return (
        <CartContext.Provider value={ {cartList, addToCart, productList, setProductList, deleteItem, sumTotal, deleteAll, totalQuantity} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
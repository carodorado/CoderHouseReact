import { createContext, useState } from 'react';
import { products } from '../data/products';

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [productList, setProductList] = useState(products)

    function repeated(id){
        return cartList.some(element => element.item.id === id)
    }

function addToCart(item, quantity){
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

    return (
        <CartContext.Provider value={ {cartList, addToCart, productList, setProductList} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
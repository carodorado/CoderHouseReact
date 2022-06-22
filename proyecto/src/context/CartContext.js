import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cartList, setCartList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const MySwal = withReactContent(Swal)

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    setTimeout(() => {
      getDocs(queryCollection)
        .then((answer) =>
          setProductList(
            answer.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }, 1000);
  }, []);

  function repeated(id) {
    return cartList.some((element) => element.item.id === id);
  }

  function numberPesos(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function addToCart(item, quantity) {

    let i = productList.findIndex((element) => element.id === item.id);
    const newProducts = productList;
    if(quantity <= newProducts[i].stock) {
               
        newProducts[i].stock -= quantity;
        setProductList(newProducts);
        setTotalQuantity(totalQuantity + quantity);

        if (repeated(item.id)) {
        let index = cartList.findIndex((element) => element.item.id === item.id);
        const newCartList = cartList;
        newCartList[index].quantity += quantity;
        setCartList(newCartList);
        } else {
        const newItem = { item, quantity };
        setCartList([...cartList, newItem]);
        }
        MySwal.fire({
            title: '¡ Genial !',
            text: `Has agregado ${quantity} productos al carrito`
          })

    } else {
        MySwal.fire({
            title: '¡ Ups..!',
            text: `Este producto se ha agotado, no es posible agregarlo.`
          });
    }     
  }

  useEffect(() => {
    setTotalQuantity(sumQuantity());
  }, [cartList]);

  function deleteItem(item) {
    setCartList(cartList.filter((element) => element.item.id !== item.id));
  }

  function sumQuantity() {
    let sum = 0;
    cartList.forEach((element) => {
      sum += element.quantity;
    });
    return sum;
  }

  function sumTotal() {
    let sum = 0;
    cartList.forEach((element) => {
      sum += element.item.price * element.quantity;
    });
    return sum;
  }

  function deleteAll() {
    setCartList([]);
    setTotalQuantity(0);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        productList,
        setProductList,
        deleteItem,
        sumTotal,
        numberPesos,
        deleteAll,
        totalQuantity,
        setTotalQuantity,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

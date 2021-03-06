import { useContext } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { CartContext } from "../../context/CartContext";

import './ShopForm.css'

function ShopForm({ newOrder }){

    const { cartList, deleteAll } = useContext(CartContext);
    const MySwal = withReactContent(Swal)
    
    function newOrder(name, email, phone){
        let order = {}
        order.buyer = {name: name, email: email, phone: phone}
        order.total = 20;
        order.items = cartList.map(element => {
            const id = element.item.id;
            const name = element.item.name;
            const price = element.item.price
            return {id, name, price}
            
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(MySwal.fire({
            title: 'Pedido Realizado',
            text: `Su pedido ha sido programado exitosamente.`
          }))
        .catch(error => console.log(error))
        .finally( () => deleteAll()) 
    }

    function handleSubmit(evt){
        evt.preventDefault();
        const name = evt.target.querySelector('.input-name').value;
        const email = evt.target.querySelector('.input-email').value;
        const phone = evt.target.querySelector('.input-phone').value;
        newOrder(name,email,phone);
    }

    return (
        <div className="signupFrm">
            <form action="" className="form" onSubmit={handleSubmit}>
                <h2 className="title">Mis datos</h2>
                <div className="inputContainer">
                    <input name="name" type="text" className="input input-name" placeholder="a" required/>
                    <label htmlFor="name" className="label">Nombre Completo</label>
                </div>
                <div className="inputContainer">
                    <input name="email" type="text" className="input input-email" placeholder="a" required/>
                    <label htmlFor="email" className="label">Correo Electronico</label>
                </div>
                <div className="inputContainer">
                    <input name="phone" type="text" className="input input-phone" placeholder="a" required/>
                    <label htmlFor="phone" className="label">Telefono</label>
                </div>
                <div className="inputContainer">
                    <input name="address" type="text" className="input input-address" placeholder="a" required/>
                    <label htmlFor="address" className="label">Direccion</label>
                </div>            
                <input type="submit" className="submitBtn" value="Comprar Ahora"/>
            </form>
        </div>
    )
}

export default ShopForm;
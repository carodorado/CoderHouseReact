import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.js'

function ItemDetailContainer(){
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const products = [{ id:'01', name:'Comedero Woof', category:'Implementos', description:'Comedero metalico para mascota de metal inoxidable, multiusos para agua o comida de tu peludito.',stock:5, price:45000, image:'bowlazul.png', reference: '012434', material: 'Metalico', size: '20 cm x 20 cm' , color: 'Blue', rating: 5},
                      { id:'02', name:'Pelota Colorida', category:'Juguetes', description:'Pelota de goma antiestres resistente a mordidas para darle horas de diversion a tu amigo peludo',stock:8, price:15000, image:'pelota.png', reference: '012957', material: 'Goma', size: '7 cm x 7 cm' , color: 'Multicolor', rating: 5},
                      { id:'03', name:'Collar Cuerina', category:'Accesorios', description:'Collar en imitacion cuero, hermosa cadena para identificar a tu perro',stock:4, price:30000, image:'collar.png', reference: '012302', material: 'Cuerina', size: '20 cm x 20 cm' , color: 'Fucsia', rating: 5}]
    const { id } = useParams();

    const getFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id));
         }, 2000);
    })

    useEffect(() => {
        getFetch
        .then(answer => setItem(answer))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
    }, [])

    return(
        <div>
            <ItemDetail loading={loading} item={item}/>
        </div>
    )
}

export default ItemDetailContainer;
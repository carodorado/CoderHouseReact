import { Link } from 'react-router-dom'

function ItemDone(){
    return (
        <>
            <Link to='/cart'>
                <button className="large-button">Ir al Carrito</button>
            </Link>
            <Link to='/'>
                <button className="large-button">Seguir Comprando</button>
            </Link>            
        </>
    )
}
export default ItemDone;
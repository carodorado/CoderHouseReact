import ItemCount from '../ItemCount/ItemCount.js'
import './ItemDetail.css'

function ItemDetail({ loading=false, item}){

    function numberPesos(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
        <div className="CardContainer">
            {loading ? 
            <div className="load">
                <h3>Cargando</h3>
                <img className="loader first" src={require('../../images/huella.png')}/>
                <img className="loader second" src={require('../../images/huella.png')}/>
                <img className="loader third" src={require('../../images/huella.png')}/>
            </div> 
            : 
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
                    <ItemCount stock={ item.stock } initial={1}/>                      
                </div>          
            </div>} 
        </div>
    )
}

export default ItemDetail;
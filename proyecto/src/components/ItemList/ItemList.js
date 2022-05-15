import Item from '../Item/Item.js'
import './ItemList.css'


function ItemList({ loading=false, items}){

    return(
        <div className="CardContainer">
            {loading ? 
            <div className="load">
                <h3>Cargando</h3>
                <img className="loader first" src={require('../../images/huella.png')}/>
                <img className="loader  second" src={require('../../images/huella.png')}/>
                <img className="loader third" src={require('../../images/huella.png')}/>
            </div> 
            : items.map(element =>
                <Item key={element.id} details={element}/>)} 
        </div>
    )
}

export default ItemList;
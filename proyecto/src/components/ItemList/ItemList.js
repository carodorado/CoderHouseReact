import Item from '../Item/Item.js'
import Loader from '../Loader/Loader.js'
import './ItemList.css'


function ItemList({ loading=false, items}){

    return(
        <div className="CardContainer">
            {loading ? 
            <Loader/>
            : items.map(element =>
                <Item key={element.id} details={element}/>)} 
        </div>
    )
}

export default ItemList;
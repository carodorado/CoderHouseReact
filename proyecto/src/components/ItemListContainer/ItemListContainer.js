import "./ItemListContainer.css";

function ItemListContainer({ greeting="hola" }){
    return(
        <div className="mensaje">{ greeting }</div>
    )
}

export default ItemListContainer;
import papelera from '../../images/icono-papelera.svg';

function ItemCart({element, numberPesos, deleteItem}){
    return (
        <div className="item-cart">
            <div  className="left">
            <img src={require(`../../images/${element.item.image}`)} alt='Comedero Azul'/>
            <div>
                <h4>{ element.item.name }</h4>
                <p>{ element.item.description }</p>
                <p>$ { numberPesos(element.item.price) }</p>                            
            </div>
            </div>
            <div className="right">
                <div>
                    <h4>Cantidad</h4>
                    <p>{ element.quantity }</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>$ { numberPesos( element.quantity * element.item.price ) }</p>
                </div>
                <div>
                    <button className="delete" onClick={() => {deleteItem(element.item)} }>
                        <img className="delete" src={ papelera } alt="icono papelera"/>
                    </button>                          
                </div>                                        
            </div>
        </div>
    )
}

export default ItemCart
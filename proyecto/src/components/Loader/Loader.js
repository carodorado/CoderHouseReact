import './Loader.css'

function Loader(){
    return(
        <div className="load">
            <h3>Cargando</h3>
            <img className="loader first" src={require('../../images/huella.png')}/>
            <img className="loader second" src={require('../../images/huella.png')}/>
            <img className="loader third" src={require('../../images/huella.png')}/>
        </div> 
    )
}

export default Loader;
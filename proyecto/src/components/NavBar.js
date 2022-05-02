import "./NavBar.css";
import buscar from './images/icono-buscar.svg';
import perfil from './images/icono-perfil.svg';
import carrito from './images/icono-carrito.svg';
import logo from './images/logo.svg';

function NavBar() {
    return (
        <header className="Nav-bar">
            <img src={ logo } alt="Logo Petshop"/>
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            <div>
                <a href=""><img src={ buscar }/></a>
                <a href=""><img src={ perfil }/></a>
                <a href=""><img src={ carrito }/></a>
            </div>
        </header>
    );
}

export default NavBar;
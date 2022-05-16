import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget.js'
import buscar from '../../images/icono-buscar.svg';
import perfil from '../../images/icono-perfil.svg';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <header className="Nav-bar">
            <Link to="/" className="logo"><img src={ logo } alt="Logo Petshop"/></Link>
            <nav>
                <ul>
                    <li><Link to="/categoria/articulos">Articulos</Link></li>
                    <li><Link to="/categoria/accesorios">Accesorios</Link></li>
                    <li><Link to="/categoria/juguetes">Juguetes</Link></li>
                </ul>
            </nav>
            <div>
                <a href=""><img src={ buscar } alt="icono buscar"/></a>
                <a href=""><img src={ perfil } alt="icono perfil"/></a>
                <CartWidget/>
            </div>
        </header>
    );
}

export default NavBar;
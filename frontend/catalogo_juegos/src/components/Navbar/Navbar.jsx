import { Link } from "react-router-dom";
import './Navbar.css'
import { useEffect } from "react";
import { useContext } from "react";
import ObtenerImagenUsuarioGenerador from "../../context/ObtenerImagenUsuarioContexto/ObtenerImagenUsuarioGenerador";

function Navbar(){
  // Uso el contexto para obtener la foto de perfil del usuario
  const { imagen } = useContext(ObtenerImagenUsuarioGenerador);
  return(
    <nav className="navbar navbar-expand-sm mb-5" id="nav-bar">
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          <img className="icon-nav" src="https://cdn.creazilla.com/icons/3204522/game-controller-icon-md.png" 
          alt="control de una consola de videojuegos" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" 
        id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-center align-items-center">
            <Link className="nav-link" to='/'>Landing</Link>
            <Link className="nav-link" to="/catalogo">Explorar catalogo</Link>
            <Link className="nav-link" to="/home">Tu coleccion</Link>
            <Link className="nav-link" to="/iniciar/sesion">Iniciar sesion</Link>
            <Link className="nav-link" to='/registro'>Registrarse</Link>
            <Link to='/user'>
            <img className="foto-usuario" 
              src={imagen} 
              alt="foto de perfil del usario"/>           
            </Link> 
          </div>
        </div>
      </div>
    </nav>
  )
};


export default Navbar;
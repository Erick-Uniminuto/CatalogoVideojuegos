// Pagina que muestra informacion de un usuario

import Imagen from "../../components/Imagen/Imagen";
import BotonesBloque from "../../components/BotonesBloque/BotonesBloque";
import './InformacionUsuario.css'
import { useNavigate } from "react-router-dom";
import CerrarSesion from "../../services/CerrarSesion";
import ObtenerImagenUsuarioGenerador from "../../context/ObtenerImagenUsuarioContexto/ObtenerImagenUsuarioGenerador";
import { useContext, useEffect } from "react";

function InformacionUsuario(){
  // Funcion para navegar por la pagina web
  const navigate = useNavigate();
  const navegar = (ruta) => {
    navigate(ruta);
    return
  }
  const { ObtenerFotoPerfil, imagen } = useContext(ObtenerImagenUsuarioGenerador);
  return(
    <section className="container-md d-flex justify-content-center align-items-center flex-column">
      <div className="row">
        <div className="col text-center mb-3">
          <img src={imagen} alt="foto de perfil del usuario" 
          className='imagen-usuario-detalles-usuario'/>
        </div>
        <div className="container-botones-usuario">
          <div className="col">
            <div className="dummy2">
              <BotonesBloque texto={'Ir a tu coleccion'} bg={'#FCA311'} mt={'1rem'} 
              fontColor={'black'} size={'1.2rem'} click={() => navegar('/home')}/>
              <BotonesBloque texto={'Explorar videojuegos'} bg={'#FCA311'} mt={'1rem'} 
              fontColor={'black'} size={'1.2rem'} click={() => navegar('/catalogo')}/>
              <BotonesBloque texto={'Pagina principal'} bg={'#FCA311'} mt={'1rem'} 
              fontColor={'black'} size={'1.2rem'} click={() => navegar('/')}/>
              <BotonesBloque texto={'Cerrar sesión'} bg={'#DC3545'} mt={'1rem'} 
              fontColor={'black'} size={'1.2rem'} click={() => {
                CerrarSesion();
                ObtenerFotoPerfil()
                navegar('/iniciar/sesion');
              }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};


export default InformacionUsuario;
// Pagina que muestra informacion de un usuario

import Imagen from "../../components/Imagen/Imagen";
import BotonesBloque from "../../components/BotonesBloque/BotonesBloque";
import './InformacionUsuario.css'
import { useNavigate } from "react-router-dom";
import CerrarSesion from "../../services/CerrarSesion";

function InformacionUsuario(){
  // Funcion para navegar por la pagina web
  const navigate = useNavigate();
  const navegar = (ruta) => {
    navigate(ruta);
    return
  }
  return(
    <section className="container-md">
      <div className="row d-flex justify-content-center align-items-center flex-column">
        <div className="col text-center mb-3">
          <Imagen radio={'999px'}
          URL={'https://i.pinimg.com/474x/8d/2b/ee/8d2bee5caa349cca166838f1b55390d1.jpg'}/>
        </div>
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
              navegar('/iniciar/sesion');
            }}/>
          </div>
        </div>
      </div>
    </section>
  )
};


export default InformacionUsuario;
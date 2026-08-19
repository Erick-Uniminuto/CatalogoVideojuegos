import Boton from "../../components/Boton/Boton";
import './Landing.css'
import Imagen from "../../components/Imagen/Imagen";
import BotonesBloque from "../../components/BotonesBloque/BotonesBloque";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Landing(){
  // Funcion para redirigir los botones a su respectivo contenido
  const navigate = useNavigate();
  const redirigir = (ruta) => {
    navigate(ruta);
    return
  }
  // Redirigir a una misma seccion dentro de la pagina
  const seccion = useRef(null);
  const moverse = () => {
    seccion.current.scrollIntoView({behavior:'smooth'})
  }
  return(
    <section className="container-md">
      <div className="row mb-5" id="primera-fila-landing">
        <div className="col d-flex justify-content-center align-items-center flex-column pe-3">
          <h5 className="texto-presentacion mb-3 text-center">
            Bienvenido al lugar donde puedes coleccionar, descubrir
            y estar al dia sobre tus videojuegos favoritos.
          </h5>
          <Boton texto={'¿Listo para empezar?'} bg={'#FCA311'} click={moverse}/>
        </div>
        <div className="col text-center ps-3" id="primer-imagen-landing">
          <Imagen URL={'https://i.makeagif.com/media/5-16-2015/qLWrHU.gif'}
          radio={'1rem'}/>
        </div>
      </div>
      <div className="row mb-5" id="segunda-fila-landing">
        <div className="col d-flex justify-content-center align-items-center flex-column pe-3">
          <h5 className="texto-presentacion mb-3 text-center">
            Descubre una gran variedad de videojuegos, en donde 
            seguramente encuentres tu proximo “deseado” o “completado”
          </h5>
        </div>
        <div className="col text-center ps-3" id="primer-imagen-landing">
          <Imagen URL={'https://i.redd.it/ive-made-a-bunch-of-cool-gifs-from-the-release-trailer-v0-mtv0rw9p27mf1.gif?width=800&auto=webp&s=d64c4849ec3a45164c4289c66a5dd8e7346b6b10'}
          radio={'1rem'}/>
        </div>
      </div>
      <div className="row" id="primera-fila-landing">
        <div className="col d-flex justify-content-center align-items-center flex-column pe-3">
          <h5 className="texto-presentacion mb-3 text-center">
            Agrega tus favoritos a tu coleccion, en donde podras llevar un registro 
            sobre tus deseados, adquiridos, completados y estar al dia de los proximos 
            lanzamientos.
          </h5>
        </div>
        <div className="col text-center ps-3" id="primer-imagen-landing">
          <Imagen URL={'https://cdn-icons-png.flaticon.com/512/6514/6514964.png'}
          radio={'1rem'}/>
        </div>
      </div>
      <div ref={seccion} className="row d-flex justify-content-center align-items-center flex-column">
        <div className="col">
          <h1 className="llamado-accion text-center mt-5 text-light"
          aria-label="titulo para indicarle al usuario los botones de inicio de sesion y registro">
            Tu lugar, tu coleccion, tus reglas
          </h1>
        </div>
        <div className="opciones-bienvenida">
          <BotonesBloque bg={'#FCA311'} texto={'Iniciar sesión'} size={'1.2rem'} mt={'1rem'}
          fontColor={'black'} click={() => redirigir('/iniciar/sesion')}/>
          <BotonesBloque bg={'#FCA311'} texto={'Registrarse'} size={'1.2rem'} mt={'1rem'}
          fontColor={'black'} click={() => redirigir('/registro')}/>
        </div>
      </div>
    </section>
  )
};


export default Landing;
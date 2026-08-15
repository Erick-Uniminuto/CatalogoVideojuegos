import ImagenDetalles from "../../components/ImagenDetalles/ImagenDetalles";
import './DetalleUsuario.css'
import BotonesBloque from "../../components/BotonesBloque/BotonesBloque";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Cargando from "../../components/Cargando/Cargando";
import DetallesJuegoUsuario from "../../services/DetallesJuegoUsuario";
import ObtenerToken from "../../services/ObtenerToken";
import PantallaError from "../../components/PantallaError/PantallaError";
import EliminarJuegoColeccion from "../../services/EliminarJuegoColeccion";
import EnviarActualizarJuego from "../../services/EnviarActualizarJuego";

function DetalleUsuario(){
  const [noModificar, setNoModificar] = useState([]);
  const [juego, setJuego] = useState([]);
  const {id} = useParams();
  const [cargando, setCargando] = useState(<Cargando/>);
  // Estados posibles que puede tener un videojuego
  const EstadosDisponibles = ['deseado=#FCA311',
    'completado=#198754',
    'adquirido=#0DCAF0',
    'proximamente=#DC3545'];
  // Guardar el estado que el usuario selecciono
  const [estado, setEstado] = useState(null);

// Funcion de navegacion
  const navigate = useNavigate();
  const navegar = (ruta) => {
    navigate(ruta);
    return
  }

    // Funcion para realizar la eliminacion del videojuego
  
  const RealizarEliminacion = () => {
    EliminarJuegoColeccion(id, ObtenerToken()).then(ans =>{
      alert(ans)
    }).catch(error => {
      setCargando(<PantallaError texto={error.message} />)
    })}

    // Funcion para cambiar el estado del juego
  const ActualizarEstado = () => {
    EnviarActualizarJuego(ObtenerToken(),'PUT',`http://localhost:3000/edit/game/${id}`,
  estado,noModificar.nombre_juego,noModificar.genero,noModificar.lanzamiento,
  noModificar.imagen,noModificar.plataformas,noModificar.desc).then(ans => {
    alert(ans)
  }).catch(error => {
    alert(error.message)
  })
  }

// Obtengo la informacion del juego seleccionado apenas se cargue el componente
  useEffect(() => {
    DetallesJuegoUsuario(id,ObtenerToken()).then(ans => {
      setJuego([
        [`Genero`,ans.genero],
        [`Lanzamiento`,ans.lanzamiento],
        [`Descripcion`,ans.desc],
        ans.imagen,
        ans.plataformas
      ])
      setNoModificar(ans);
      setCargando(false);
    }).catch(error => {
      setCargando(<PantallaError texto={error.message} />)
    })
  },[])
  return(
    <section className="container-md">
      {cargando ? <div className="cargando-container text-center">{cargando}</div> :
      <>
      <div className="row">
        <div className="col text-center">
          <h1 className="nombre-videojuego mb-4">
            {noModificar.nombre_juego}
          </h1>
          <ImagenDetalles 
          URL={juego.at(-2)}
          radio={'2rem'}/>
        </div>
      </div>
      <div className="row">
        <h2 className="seccion-detalles text-center mt-4">
          Cambiar Estado
        </h2>
        {EstadosDisponibles.map(estado => (
          <div className="col" key={estado}>
            <BotonesBloque bg={estado.split('=').at(1)} texto={estado.split('=').at(0)} 
            fontColor={'black'} size={'1.2rem'} mt={'1.1rem'} 
            click={() => {
              setEstado(estado.split('=').at(0))
              alert(`Has seleccionado ${estado.split('=').at(0).toUpperCase()} recuerda guardar tus cambios en el boton de la parte inferior`)
            }}/>
          </div>
        ))}
      </div>
      {/* juego.slice(0,-1) */}
      <div className="row mt-4 d-flex flex-column">
        <div className="col text-center">
          {juego.slice(0,-2).map(ele => (
            <div className="dummy" key={ele}>
            <h2 className="categoria-info">
              {ele.at(0)}
            </h2>
            <h4 className="info-categoria mb-4">
              {ele.at(1)}
            </h4>
            </div>
          ))}
          <h2 className="categoria-info">
            Lo encuentras en:
          </h2>
          <h4 className="info-categoria mb-4">
            {juego.at(-1).join(', ')}
          </h4>
        </div>
        <div className="col" key={estado}>
          <BotonesBloque texto={'Guardar cambios'} mt={'1rem'} bg={'#198754'} fontColor={'black'} 
          size={'1.2rem'} click={ActualizarEstado}/>
          <BotonesBloque texto={'Eliminar de tu coleccion'} mt={'1rem'} bg={'#DC3545'} fontColor={'black'} 
          size={'1.2rem'} click={RealizarEliminacion} />
          <BotonesBloque texto={'Editar videojuego'} mt={'1rem'} bg={'#0DCAF0'} fontColor={'black'} 
          size={'1.2rem'} click={() => navegar(`/editar-juego/${id}`)}/>
          <BotonesBloque texto={'Volver atras'} mt={'1rem'} bg={'#FCA311'} fontColor={'black'} 
          size={'1.2rem'} click={() => navegar(-1)}/>
        </div>
      </div>
      </>
      }
    </section>
  )
};


export default DetalleUsuario;


// Revisar las etiquetas de las tarjetas (deben cambiar)
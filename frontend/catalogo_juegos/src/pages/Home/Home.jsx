import './Home.css'
import BarraNavegacion from '../../components/BarraNavegacion/BarraNavegacion';
import Boton from '../../components/Boton/Boton';
import { useNavigate } from 'react-router-dom';
import ObtenerColeccionUsuario from '../../services/ObtenerColeccionUsuario';
import { useEffect } from 'react';
import ObtenerToken from '../../services/ObtenerToken';
import { useState } from 'react';
import Cargando from '../../components/Cargando/Cargando';
import PantallaError from '../../components/PantallaError/PantallaError';
import Tarjeta from '../../components/Tarjeta/Tarjeta';
import BuscarPorPalabraColeccion from '../../services/BuscarPorPalabraColeccion';


function Home(){
  // Funcion para navegar por la apliacion web
  const navigate = useNavigate();
  const Navegar = (ruta) => {
    navigate(ruta);
    return
  }
  const [cargando, setCargando] = useState(<Cargando/>);
  // Estado para almacenar toda la coleccion del usuario
  const [coleccion, setColeccion] = useState([]);

// Funcion para realizar una busqueda por palabra clave
  const RealizarBusqueda = () => {
    let palabra = document.querySelector('input').value;
    BuscarPorPalabraColeccion(palabra,ObtenerToken()).then(ans => {
      setCargando(<Cargando/>)
      setColeccion(ans)
      setCargando(false)
    }).catch(error => {
      setCargando(<PantallaError texto={error.message}/>)
    })
  }
console.log(coleccion)
// Apenas carga el componente, obtengo la coleccion del usuario
  useEffect(() => {
    ObtenerColeccionUsuario(ObtenerToken()).then(ans => {
      setColeccion(ans)
      setCargando(false);
    }).catch(error => {
      console.log('Entro a error')
      setCargando(<PantallaError texto={error.message}/>)
    })
  },[])
  return(
    <section className="container-md">
      <div className="row">
        <div className="col text-center">
          <h1 className='titulo-home text-center mb-3'>
            Bienvenido
          </h1>
          <BarraNavegacion placeholder={'Busca por nombre o genero'} 
          boton={<Boton texto={<i className="bi bi-search"></i>} bg={'#FCA311'} 
          type={'button'} click={RealizarBusqueda} />}/>
          <Boton bg={'#FCA311'} color={'black'} texto={'Agregar videojuego personalizado'}
          mt={'1.5rem'} click={() => Navegar('/agregar-juego')}/>
        </div>
      </div>
      <div className="row mt-5">
        {cargando ? <div className='text-center mt-4'>{cargando}</div> :          
        <>
        {coleccion.map(ele => (
          <div className="col d-flex mt-3 justify-content-center align-items-center" key={ele._id}>
            <Tarjeta nombre={ele.nombre_juego} URL={ele.imagen} click={() => Navegar(
              `/detalle/juego/usuario/${ele._id}`
            )} estado={ele.estado} />
          </div>
        ))}
        </>       
        }
      </div>
    </section>
  )
};

export default Home;
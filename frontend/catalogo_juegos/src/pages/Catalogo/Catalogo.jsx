import './Catalogo.css'
import BarraNavegacion from '../../components/BarraNavegacion/BarraNavegacion';
import Boton from '../../components/Boton/Boton';
import Tarjeta from '../../components/Tarjeta/Tarjeta';
import { useState } from 'react';
import Cargando from '../../components/Cargando/Cargando';
import { useEffect } from 'react';
import ObtenerTodosJuegos from '../../services/ObtenerTodosJuegos';
import PantallaError from '../../components/PantallaError/PantallaError';
import BuscarJuegoPlabraClave from '../../services/BuscarJuegoPalabraClave';
import { useNavigate } from 'react-router-dom';

function Catalogo(){
  const navigate = useNavigate();
  // Almacen para los juegos devueltos por la API
  const [juegos, setJuegos] = useState([]);
  // Estado de carga
  const [cargando, setCargando] = useState(true);

  // Funcion para dirigirme a ver detalles del juego seleccionado por el usuario
  const DetallesJuego = (id) => {
    navigate(`/detalle/${id}`)
    return
  }

  // Funcion para buscar juegos en la barra de busqueda
  const BuscarJuegos = () => {
    let query = document.querySelector('input');
    query = query.value ;
    // Funcion para obtener la lista de resultados
    BuscarJuegoPlabraClave('http://localhost:3000/games/search/',query).then(ans => {
      setCargando(<Cargando/>)
      setJuegos(ans)
      setCargando(false)
    }).catch(error => {
      setCargando(<PantallaError texto={error.message} />)
    })
  }

  useEffect(() => {
    ObtenerTodosJuegos().then(ans => {
      setCargando(<Cargando/>)
      setJuegos(ans)
      setCargando(false)
    }).catch(error => {
      setCargando(<PantallaError texto={error.message} />)
    })
  },[])
  return(
    <section className="container-md">
      <div className="row">
        <h1 className='titulo-catalogo text-center mb-3'>
          Catalogo
        </h1>
        <BarraNavegacion 
        boton={<Boton texto={<i className="bi bi-search"></i>} bg={'#FCA311'} 
        type={'button'} click={BuscarJuegos}/>}
        placeholder={'Busca por nombre o genero'}/>
      </div>
      <div className="contenedor-exterior-tarjetas mt-5">
        {cargando ? cargando : 
        <>
        <div className="col" id='contenedor-tarjetas-juegos'>
          {juegos.map(juego => (
            <Tarjeta nombre={juego.nombre_juego} 
            URL={juego.imagen} click={() => DetallesJuego(juego._id)} key={juego._id}/>
          ))}
        </div>
        </>
        }
      </div>
    </section>
  )
};

// contenedor-interior-tarjetas

export default Catalogo;
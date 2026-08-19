// Pagina encargada de mostrar detalles de un juego del catalogo

import { useParams } from "react-router-dom";
import './Detalles.css'
import ImagenDetalles from "../../components/ImagenDetalles/ImagenDetalles";
import { useEffect } from "react";
import ObtenerDetallesProducto from "../../services/ObtenerDetallesProducto";
import { useState } from "react";
import Cargando from "../../components/Cargando/Cargando";
import PantallaError from "../../components/PantallaError/PantallaError";
import BotonesBloque from "../../components/BotonesBloque/BotonesBloque";
import EnviarActualizarJuego from "../../services/EnviarActualizarJuego";
import { useNavigate } from "react-router-dom";
import ObtenerToken from "../../services/ObtenerToken";

// Pedir los datos del juego, ver como optimizar el codigo HTML

function Detalles(){
  const navigate = useNavigate();
  const {id} = useParams();
  const [cargando, setCargando] = useState(<Cargando/>);
  const [juego, setJuego] = useState([]);

// Funcion para volver runa pagina atras
  const Volver = () => {
    navigate(-1);
    return
  }

  // Funcion para agregar el juego a la coleccion del usuario
  const enviarJuego = () => {
    const tokenUsuario = ObtenerToken();
    EnviarActualizarJuego(tokenUsuario,'POST','http://localhost:3000/add/game',
      'adquirido',juego.at(0),juego.at(3).split('=').at(1),juego.at(4).split('=').at(1),
      juego.at(1),juego.at(2),juego.at(5).split('=').at(1)
    ).then(ans => {
      // Si el juego se agrega correctamente se le avisa al usuario.
      alert(ans)
      return
    }).catch(error => {
      // Si existe un error agregando el juego se le indica al usuario
      alert(error.message)
    })
  }

  useEffect(() => {
    // Apenas se cargue el componente se obtiene toda la informacion del producto especifico
    ObtenerDetallesProducto(id).then(ans => {
      let datos = [
        ans.nombre_juego,
        ans.imagen,
        ans.plataformas,
        `género=${ans.genero}`,
        `lanzamiento=${ans.lanzamiento}`,
        `descripción=${ans.desc}`
      ];
      setJuego(datos)
      setCargando(false);
    }).catch(error => {
      setCargando(<PantallaError texto={error.message} />)
    })
  },[])
  return(
    <section className="container-sm text-center
    d-flex justify-conent-center align-items-center flex-column">
      {cargando ? cargando :
      <>
      <div className="row mb-4">
        <div className="col">
          <h1 className="nombre-videojuego text-center mb-4">
            {juego.at(0)}
          </h1>
          <ImagenDetalles radio={'1rem'} 
          URL={juego.at(1)}/>
        </div>
      </div>
      <div className="contenedor-detalles-videojuego">
        <div className="row">
          <div className="col text-start">
            <div className="info-juego">
              {juego.slice(3).map(elemento => (
                <div key={elemento}>
                  <h2 className="categoria-info">
                    {elemento.split('=').at(0)}
                  </h2>
                  <h4 className="info-categoria mb-4">
                    {elemento.split('=').at(1)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <BotonesBloque bg={'#FCA311'} texto={'Agregar a tu colección'} fontColor={'black'}
          size={'1.2rem'} mt={'1rem'} click={enviarJuego} />
          <BotonesBloque bg={'#FCA311'} texto={'Volver atras'} fontColor={'black'}
          size={'1.2rem'} mt={'1rem'} click={Volver} />
        </div>
      </div>
      </>
      }
    </section>
  )
};


export default Detalles;

// Agregar las URL de la base de datos
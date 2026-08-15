import './EditarVideojuego.css'
import InputFormulario from '../../components/InputFormulario/InputFormulario';
import Boton from '../../components/Boton/Boton';
import IniciarSesionService from '../../services/IniciarSesionService';
import Cargando from '../../components/Cargando/Cargando';
import { useState } from 'react';
import Mensaje from '../../components/Mensaje/Mensaje';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import TextArea from '../../components/TextArea/TextArea';
import Seleccionador from '../../components/Seleccionador/Seleccionador';
import ObtenerToken from '../../services/ObtenerToken';
import EnviarActualizarJuego from '../../services/EnviarActualizarJuego';


function EditarVideojuego(){
  const {id} = useParams();
  let [plataformas, setPlataformas] = useState([]);
  // Estado para guardar el valor del contador
  let [contador, setContador] = useState(1);
  // Funcion para aumentar y disminuir el contador
  const disminuir = () => {
    setContador(contador <= 1 ? 1 : contador -= 1)
  }
  const aumentar = () => {
    setContador(contador >= 4 ? 4 : contador +=1)
  };
  // Funcion para navegar por la apliacion web
  const navigate = useNavigate();
  // Estado de carga o error en el inicio de sesion
  const [cargando, setCargando] = useState(null);
  // Obtengo los datos del usuario que se enviaran en el formulario
  const ObtenerDatos = () => {
    const tokenUsuario = ObtenerToken();
    setCargando(<Cargando/>)
    let datos = [];
    datos.push(document.querySelector('textarea').value)
    let datoSeleccionadores = document.querySelectorAll('select');
    let datosFormulario = document.querySelectorAll('input');
    datosFormulario.forEach(dato => {
      datos.push(dato.value);
    })
    datoSeleccionadores.forEach(seleccionador => {
      datos.push(seleccionador.value)
    })
    let plataformas = datos.slice(6)
    datos = datos.slice(0,6)
// Funcion para enviar la informacion
    EnviarActualizarJuego(tokenUsuario,'PUT', `http://localhost:3000/edit/game/${id}`,
      datos.at(5),datos.at(1),datos.at(2),datos.at(3),datos.at(4),plataformas,datos.at(0)
    ).then(ans => {
      setCargando(<Mensaje text={ans} color={'#0D6EFD'} />)
      return
    }).catch(error => {
      setCargando(<Mensaje text={error.message} color={'red'} />)
    })
  }

// Crear cantidad de campos como plataformas
  useEffect(() => {
    setPlataformas([])
    for(let i = 0;i<contador;i+=1){
      setPlataformas(plataforma => [...plataforma,<Seleccionador estados={['xbox','playstation'
        ,'nintendo switch', 'steam', 'epic games store','NES'
      ]} key={i} />])
    }
  },[contador])

  return(
    <section className="container-md d-flex justify-content-center align-items-center">
      <div className="borde-externo-formulario rounded-4 px-4 mx-4">
        <h1 className='mt-4 mb-3 text-center'>
          Editar videojuego
        </h1>
        <div className="row p-0">
            <InputFormulario label={'Nuevo nombre'} tipo={'text'}/>
            <InputFormulario label={'Nuevo genero'} tipo={'text'}/>
            <InputFormulario label={'Fecha lanzamiento'} tipo={'date'}/>
            <TextArea text={'Nueva descripcion'}/>
            <InputFormulario label={'Imagen (URL)'} tipo={'text'}/>
            <Seleccionador estados={['deseado','completado','adquirido','proximamente']}
            texto={'Estado'}/>
            <div className="plataformas d-flex justify-content-start align-items-center">
              <h6 className='me-2'>Plataformas</h6>
              <Boton texto={<i className="bi bi-arrow-left"></i>} bg={'black'} radio={'999px'}
              size={'.6rem'} color={'white'} click={disminuir}/>
              <h6 className='ms-2 me-2' aria-label='cantidad de plataformas en el formulario'>{contador}</h6>
              <Boton texto={<i className="bi bi-arrow-right"></i>} bg={'black'} radio={'999px'}
              size={'.6rem'} color={'white'} click={aumentar}/>
            </div>
            {plataformas}
            <div className="estado-peticion text-center">
              {cargando}
            </div>
            <div className="col text-center mb-4 mt-2 p-0">
              <Boton texto={'Guardar cambios'} radio={'999px'} bg={'black'} 
              color={'#FCA311'} px={'1.3rem'} size={'1.3rem'} click={ObtenerDatos}/>
            </div>
        </div>
      </div>
    </section>
  )
};


export default EditarVideojuego;
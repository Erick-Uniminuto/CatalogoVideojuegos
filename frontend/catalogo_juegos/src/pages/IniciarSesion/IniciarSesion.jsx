import './IniciarSesion.css'
import InputFormulario from '../../components/InputFormulario/InputFormulario';
import Boton from '../../components/Boton/Boton';
import IniciarSesionService from '../../services/IniciarSesionService';
import Cargando from '../../components/Cargando/Cargando';
import { useState } from 'react';
import Mensaje from '../../components/Mensaje/Mensaje';
import { useNavigate } from 'react-router-dom';

function IniciarSesion(){
  // Funcion para navegar por la apliacion web
  const navigate = useNavigate();
  // Estado de carga o error en el inicio de sesion
  const [cargando, setCargando] = useState(null);
  // Obtengo los datos del usuario que se enviaran en el formulario
  const enviarDatos = () => {
    setCargando(<Cargando/>)
    let datosFormulario = document.querySelectorAll('input');
    let datosEnviar = [];
    datosFormulario.forEach(dato => {
      datosEnviar.push(dato.value);
    })
    // Envio los datos que el usuario ingreso para validacion
    IniciarSesionService(datosEnviar.at(0),datosEnviar.at(1)).then(ans => {
      // Si el inicio de sesion fue correcto
      document.cookie = `token=${ans.msg};path=/`
      navigate('/home');
      return
      // Si ocurre un error al inicio de sesion, se muestra el mensaje al usuario
    }).catch(error => {
      setCargando(<Mensaje text={error.message} color={'red'}/>)
    })
    return
  };
  return(
    <section className="container-md d-flex justify-content-center align-items-center">
      <div className="borde-externo-formulario rounded-4 px-4 mx-4">
        <h1 className='mt-4 mb-3 text-center'>
          Iniciar sesión
        </h1>
        <div className="row p-0">
            <InputFormulario label={'Correo electronico'} tipo={'text'} id={1}/>
            <InputFormulario label={'Contraseña'} tipo={'password'} id={2}/>
            <div className="estado-peticion text-center">
              {cargando}
            </div>
            <div className="col text-center mb-4 mt-2 p-0">
              <Boton texto={'Iniciar sesión'} radio={'999px'} bg={'black'} 
              color={'#FCA311'} px={'1.3rem'} size={'1.3rem'} click={enviarDatos}/>
            </div>
        </div>
      </div>
    </section>
  )
};


export default IniciarSesion;
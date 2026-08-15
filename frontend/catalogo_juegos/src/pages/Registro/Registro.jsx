import './Registro.css'
import InputFormulario from '../../components/InputFormulario/InputFormulario';
import Boton from '../../components/Boton/Boton';
import Cargando from '../../components/Cargando/Cargando';
import { useState } from 'react';
import Mensaje from '../../components/Mensaje/Mensaje';
import { useNavigate } from 'react-router-dom';
import CrearUsuarioServicio from '../../services/CrearUsuarioServicio';

function Registro(){
  // Funcion para navegar por la apliacion web
  const navigate = useNavigate();
  // Estado de carga o error en el inicio de sesion
  const [cargando, setCargando] = useState(null);
  // Obtengo los datos del usuario que se enviaran en el formulario
  const crearUsuario = () => {
    setCargando(<Cargando/>)
    let datosFormulario = document.querySelectorAll('input');
    let datosEnviar = [];
    datosFormulario.forEach(dato => {
      datosEnviar.push(dato.value);
    })
    // Funcion para crear un nuevo usuario
    CrearUsuarioServicio(datosEnviar.at(0),datosEnviar.at(1),datosEnviar.at(2),datosEnviar.at(3)).then(ans => {
      // Cuando el usuario se registra de forma correcta se redirige al inicio de sesion
      navigate('/iniciar/sesion');
      return
    }).catch(error => {
      // Si existe un error con la validacion de los datos se le indica al usuario
      setCargando(<Mensaje color={'red'} text={error.message}/>)
    })
  };
  return(
    <section className="container-md d-flex justify-content-center align-items-center">
      <div className="borde-externo-formulario rounded-4 px-4 mx-4">
        <h1 className='mt-4 mb-3 text-center'>
          Registrarse
        </h1>
        <div className="row p-0">
            <InputFormulario label={'Nombre de usuario'} tipo={'text'} id={1}/>
            <InputFormulario label={'Correo electronico'} tipo={'text'} id={2}/>
            <InputFormulario label={'Contraseña'} tipo={'password'} id={2}/>
            <InputFormulario label={'Imagen'} tipo={'text'} id={2}/>
            <div className="estado-peticion text-center">
              {cargando}
            </div>
            <div className="col text-center mb-4 mt-2 p-0">
              <Boton texto={'Registrarse'} radio={'999px'} bg={'black'} 
              color={'#FCA311'} px={'1.3rem'} size={'1.3rem'} click={crearUsuario}/>
            </div>
        </div>
      </div>
    </section>
  )
};


export default Registro;
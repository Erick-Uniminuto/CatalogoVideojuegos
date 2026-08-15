import { Outlet } from "react-router-dom";
import Autenticacion from "../../services/Autenticacion";
import { useNavigate } from "react-router-dom";

// Funcion para realizar la autenticacion

function Auth(){
  // Obtengo el token de las cookies del usuario
  const token = document.cookie || 'null'
  // Preparo una funcion para navegar
  const navigate = useNavigate();
  // Function para realizar la autenticacion
  Autenticacion(token).then(ans => {
    // Si el token no es valido, entonces reenvio al usuario al inicio de sesion
    if(!ans){
      navigate('/iniciar/sesion')
      return
    }
  })
  // Si el token fue valido dejo entrar al usuario a las rutas protegidas
  return <Outlet/>
};


export default Auth;
// Componente que permite interactuar con un contexto

import { useContext, useState } from "react";
import ObtenerImagenUsuarioGenerador from "./ObtenerImagenUsuarioGenerador";
import ObtenerFotoUsuario from "../../services/ObtenerFotoUsuario";
import ObtenerToken from "../../services/ObtenerToken";

function ObtenerImagenUsuarioContexto({ children }){
  // Estado que controlara la presencia de si el usuario tiene foto o no
  const [imagen, setImagen] = useState('https://i.pinimg.com/474x/8d/2b/ee/8d2bee5caa349cca166838f1b55390d1.jpg');
  // Obtener la foto de perfil del usuario
  const ObtenerFotoPerfil = () => {
    const token = ObtenerToken();
    if(!token){
      setImagen('https://i.pinimg.com/474x/8d/2b/ee/8d2bee5caa349cca166838f1b55390d1.jpg')
      return
    }
    setImagen(ObtenerFotoUsuario(token));
    return
  }
  return(
    <ObtenerImagenUsuarioGenerador.Provider value={{imagen, ObtenerFotoPerfil}}>
      { children }
    </ObtenerImagenUsuarioGenerador.Provider>
  )
};


export default ObtenerImagenUsuarioContexto;
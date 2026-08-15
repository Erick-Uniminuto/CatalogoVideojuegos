// Funcion para obtener la coleccion completa del usuario

import ErrorConexion from "./ErrorConexionAPI";

async function ObtenerColeccionUsuario(token){
  // Realizo la peticion a la API por medio de GET
  let peticion = await fetch(`http://localhost:3000/user/collection/${token}`);
  let resultado = await peticion.json();
  // Si la peticion no fue correcta envio un error
  if(peticion.status != 200 || resultado.msg.length <= 0){
    throw new ErrorConexion('No logramos encontrar coincidencias');
  }
  // Si la peticion fue correcta devuelvo la coleccion
  return resultado.msg
};


export default ObtenerColeccionUsuario;
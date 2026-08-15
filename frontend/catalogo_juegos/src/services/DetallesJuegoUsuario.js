// Funcion para obtener los detalles del juego seleccionado por el usuario

import ErrorConexion from "./ErrorConexionAPI";

async function DetallesJuegoUsuario(id_juego, id_usuario){
  // Realizo una peticion por GET
  let peticion = await fetch(`http://localhost:3000/user/collection/details/${id_juego}/${id_usuario}`);
  const resultado = await peticion.json();
  // Si la API devuelve un error la muestro al usuario
  if(peticion.status != 200){
    throw new ErrorConexion(resultado.msg);
  }
  // Si todo sale bien se lo muestro al usuario
  return resultado.msg
};


export default DetallesJuegoUsuario;
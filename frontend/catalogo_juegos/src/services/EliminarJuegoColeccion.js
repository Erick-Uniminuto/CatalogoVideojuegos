// Funcion para eliminar un videojuego de la coleccion del usuario

import ErrorConexion from "./ErrorConexionAPI";

async function EliminarJuegoColeccion(id_juego, token){
  // Envio la peticion del usuario por el metodo DELETE
  let peticion = await fetch(`http://localhost:3000/delete/${id_juego}/${token}`,
    {method:'DELETE'}
  )
  const resultado = await peticion.json();
  // Si hubo un error en la eliminacion se lo indico al usuario
  if(peticion.status != 200){
    throw new ErrorConexion(resultado.msg);
  }
  // Si el juego fue eliminado correctamente le digo al usuario
  return resultado.msg
}

export default EliminarJuegoColeccion;
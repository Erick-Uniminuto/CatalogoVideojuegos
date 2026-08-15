// Servicio para obtener todos los juegos del catalogo

import ErrorConexion from "./ErrorConexionAPI";

async function ObtenerTodosJuegos(){
  let peticion = await fetch('http://localhost:3000/games',{method:'GET'});
  let resultado = await peticion.json();
  // Si la API devuelve codigo de error se levanta un error
  if(peticion.status != 200){
    throw new ErrorConexion(resultado.msg);
  }
  // Si la peticion fue correcta, devuelvo la informacion
  return resultado.msg
};


export default ObtenerTodosJuegos;
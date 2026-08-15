// Funcion que me permite filtrar resultados por una palabra clave en la coleccion del 
// usuario

import ErrorConexion from "./ErrorConexionAPI";

async function BuscarPorPalabraColeccion(palabra, id){
  palabra = palabra.length <= 0 || palabra.at(0) === ' ' ? '<' : palabra;
  // Realizo la peticion por el metodo GET
  let peticion = await fetch(`http://localhost:3000/user/collection/search/${palabra}/${id}`);
  let resultado = await peticion.json();
  // Si la API devuelve un error o no hay resultados, devuelvo un error al usuario
  if(peticion.status != 200 || resultado.msg.length <= 0){
    throw new ErrorConexion('No hemos logrado encontrar coincidencias');
  }
  // Si hay contenido se lo devuelvo al usuario.
  return resultado.msg
};


export default BuscarPorPalabraColeccion;
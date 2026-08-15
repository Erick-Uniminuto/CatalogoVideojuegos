// Funcion para buscar un juego por palabra clave

import ErrorConexion from "./ErrorConexionAPI";

async function BuscarJuegoPlabraClave(URL, palabra){
  palabra = palabra.length <= 0 || palabra.at(0) === ' ' ? '<' : palabra;
  let peticion = await fetch(`${URL}${palabra}`,{method:'GET'});
  const data = await peticion.json();
  if(peticion.status != 200 || data.msg.length <= 0){
    throw new ErrorConexion('No hemos podido encontrar resultados');
  }
  return data.msg
};


export default BuscarJuegoPlabraClave;
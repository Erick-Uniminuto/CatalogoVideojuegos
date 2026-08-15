// Funcion para obtener detalles de un producto en especifico para el catalogo

import ErrorConexion from "./ErrorConexionAPI";

async function ObtenerDetallesProducto(id){
  let peticion = await fetch(`http://localhost:3000/games/detail/${id}`, {method:'GET'});
  const datos = await peticion.json();
  // Si el estado de la peticion no fue exitosa obtengo un error
  if(peticion.status != 200){
    throw new ErrorConexion(datos.msg);
  }
  // Si la peticion fue correcta obtengo los datos
  return datos.msg.at(0);
};


export default ObtenerDetallesProducto;
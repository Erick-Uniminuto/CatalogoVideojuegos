// Funcion para actualizar o crear un nuevo juego en la coleccion del usuario

import ErrorConexion from "./ErrorConexionAPI";

async function EnviarActualizarJuego(
  token,
  metodoHTTP,
  URL,
  estado,
  nombre,
  genero,
  fecha,
  imagen,
  plataformas,
  descripcion
){
  // Realizo la peticion por POST
  let peticion = await fetch(URL,{
    method:metodoHTTP,
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      token:token,
      nombre_juego:nombre,
      genero:genero,
      plataformas:plataformas,
      lanzamiento:fecha,
      desc:descripcion,
      imagen:imagen,
      estado:estado
    })
  })
  const resultado = await peticion.json();
  // Algo salio mal con la API
  if(peticion.status != 200){
    throw new ErrorConexion(resultado.msg);
  }
  return resultado.msg
};


export default EnviarActualizarJuego;
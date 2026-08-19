// Funcion para obtener la foto de perfil del usuario

function ObtenerFotoUsuario(token){
  // Separo el token en sus partes y tomo la segunda, que es la que contiene la informacion
  let info = token.split('.');
  // Tomo la informacion del token y la decodifico
  info = JSON.parse(atob(info[1]));
  // Devuelvo la foto de perfil del usuario
  return info.imagen
}

export default ObtenerFotoUsuario;
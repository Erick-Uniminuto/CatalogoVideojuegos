// Funcion para obtener el token del usuario

function ObtenerToken(){
  return document.cookie.split('=').at(1) || null;
};


export default ObtenerToken;
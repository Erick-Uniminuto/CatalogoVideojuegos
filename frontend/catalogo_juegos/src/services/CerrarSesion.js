// Funcion para cerrar sesion, quitando las cookies donde se encuentra el token de sesion

function CerrarSesion(){
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  return
};


export default CerrarSesion;
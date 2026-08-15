// Funcion para enviar los datos de inicio de sesion a la API

import ErrorConexion from "./ErrorConexionAPI";

async function IniciarSesionService(correo, contraseña){
  let peticion = await fetch('http://localhost:3000/verify',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      correo:correo,
      pass:contraseña
    })
  });
  const respuesta = await peticion.json();
  if(peticion.status != 200){
    throw new ErrorConexion(respuesta.msg);
  }
  return respuesta
};


export default IniciarSesionService;
// Realizar peticion a la API para crear un nuevo usuario

import ErrorConexion from "./ErrorConexionAPI";

async function CrearUsuarioServicio(nombre, correo, contraseña, imagen){
  let peticion = await fetch('http://localhost:3000/new/user',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      nombre:nombre,
      pass:contraseña,
      correo:correo,
      imagen:imagen
    })
  })
  const respuesta = await peticion.json();
  if(peticion.status != 201){
    throw new ErrorConexion(respuesta.msg);
  }
  return true;
};


export default CrearUsuarioServicio;
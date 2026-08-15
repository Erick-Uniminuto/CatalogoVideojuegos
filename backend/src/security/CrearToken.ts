// Funcion para crear el token de sesion

import jwt from "jsonwebtoken";

function CrearToken(nombre:string, correo:string, id:string){
  return jwt.sign({nombre:nombre,correo:correo,id:id},'shhh')
  // Retorno el token de sesion
}

export default CrearToken;
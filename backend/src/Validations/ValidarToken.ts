// Funcion para validar el token

import jwt from 'jsonwebtoken';
import ErrorValidacion from './ErrorValidacion.js';

function ValidarToken(token:string){
  try{
    jwt.verify(token,'shhh')
    return true; // El token fue correctamente validado

  // Si el token no es correcto o esta alterado, se le indica al usuario con un error
  } catch(error) {
    throw new ErrorValidacion('El token enviado no es valido')
  }
};


export default ValidarToken;
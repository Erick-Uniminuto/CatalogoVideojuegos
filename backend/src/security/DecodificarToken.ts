// Funcion para obtener la informacion que viaja en el token

import jwt from 'jsonwebtoken';

function DecodificarToken(token:string){
  try {
    // Si el token es decodificado correctamente, obtengo la informacion del usuario
    const info = jwt.decode(token);
    // Si el contenido del token es vacio, significa queno hay token
    // Si existe informacion del token, se devuelve esa informacion
    if(!info){
      throw new Error('')
    }
    return info
  } catch (error) {
    // Si hay un error mientras se decodifica el token se envia un error al usuario
    throw new Error('El token no es valido');
  }
};


export default DecodificarToken;
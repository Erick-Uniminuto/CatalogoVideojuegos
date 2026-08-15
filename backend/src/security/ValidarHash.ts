// Funcion para validar que la contraseña del usuario coincida con el hash

import { verify } from "argon2";

async function ValidarHash(password:string, hash:string){
  try {
    // Se valida el hash con la contraseña escrita
    const validarPass = await verify(hash,password)
    // Si existe coincidencia se devuelve true
    if(validarPass){
      return true
    }
    // En caso de que no haya coincidencia o haya un error, se devuelve false
    return false
  } catch (error) {
    return false
  }
};


export default ValidarHash;
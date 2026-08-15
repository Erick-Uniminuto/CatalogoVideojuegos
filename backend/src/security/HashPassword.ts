// Funcion para generar un hash en la contraseña y no guardarla en texto plano

import { hash } from "argon2";

async function HashPassword(password:string){
  const nueva_pass = await hash(password);
  return nueva_pass
};


export default HashPassword;
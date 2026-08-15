import ErrorValidacion from "./ErrorValidacion.js";

function ValidarNombreUsuario(nombre:string){
  // El nombre de usuario debe tener almenos un caracter y maximo 20
  if(nombre.length < 1 || nombre.length > 20){
    throw new ErrorValidacion('El nombre de usuario debe contener de 1 a 20 caracteres') 
    // Se devuelve error si la validacio no fue correcta
  };
  return true // Devuelvo true si la validacion fue correcta
}

export default ValidarNombreUsuario;
import ErrorValidacion from "./ErrorValidacion.js";

function ValidarContraseña(pass:string){
  // Expresion regular para validar la contraseña
  const validar:RegExp = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)\[\]\{\}\:\;\,\.\<\>\?\¿\"\']).+$/
  if(!validar.test(pass)){
    throw new ErrorValidacion('La contraseña debe contener al menos una mayuscula, minuscula, caracter especial y numero')
    // Si la contraseña no contiene al menos una minuscula, mayuscula, caracter especial y numero
    // se lanzara un error
  };
  if(pass.length < 1 || pass.length > 30){
    throw new ErrorValidacion('La contraseña debe tener de 1 a 30 caracteres')
    // la contraseña debe contar con minimo 1 caracter y maximo 30 caracteres
  };
  return true
};

export default ValidarContraseña;
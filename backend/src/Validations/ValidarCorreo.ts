import ErrorValidacion from "./ErrorValidacion.js";

function ValidarCorreo(correo:string){
  // Expresion regular para validar un correo electronico
  const validar = /^\w+@.+\.(com|co|gov|edu|net|org|io|app)$/
  if(!validar.test(correo)){
    throw new ErrorValidacion('Correo electronico no valido')
  // Si el correo electronico no contiene un arroba ni los dominios especificados 
  // se considera como un correo no valido
  };
  return true;
};

export default ValidarCorreo;
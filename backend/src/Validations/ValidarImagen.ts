import ErrorValidacion from "./ErrorValidacion.js";

function ValidarImagen(URL:string){
  // Expresion regular para validar la URL de la imagen enviada
  const validar:RegExp = /^https:\/\/.+\.(png|jpeg|jpg|webp)$/
  if(!validar.test(URL)){
    throw new ErrorValidacion('La URL no es valida')
    // El enlace de la imagen debe utilizar https y utilizar las extensiones png, jpeg, jpg o webp
  };
  if(URL.length < 1 || URL.length > 300){
    throw new ErrorValidacion('La URL debe tener de 1 a 300 caracteres')
    // Si la URL tiene menos de 1 caracter o mas de 300 caracteres no es valido
  };
  return true;
};


export default ValidarImagen;
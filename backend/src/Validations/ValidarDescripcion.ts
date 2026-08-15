// Funcion para validar la descripcion de un producto

import ErrorValidacion from "./ErrorValidacion.js";

function ValidarDescripcion(desc:string){
  // Si la descripcion es demasiado corta o larga, se envia un error al usuario
  if(desc.length < 1 || desc.length > 300){
    throw new ErrorValidacion('La descripcion debe contar con 1 a 300 caracteres');
  };
  return desc.toLowerCase();
};


export default ValidarDescripcion;
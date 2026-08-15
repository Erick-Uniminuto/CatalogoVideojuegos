// Funcion para validar el genero de un videojuego

import ErrorValidacion from "./ErrorValidacion.js";

function ValidarGeneroJuego(genero:string){
  // Si el genero del videojuego tiene mas de 30 caracteres o menos de 1, no es valido
  if(genero.length < 1 || genero.length > 30){
    throw new ErrorValidacion('El genero del videojuego debe tener de 1 a 30 caracteres');
  };
  // Si el genero cumple con la validacion se devuelve el dato listo para almacenar
  return genero.toLowerCase();
};

export default ValidarGeneroJuego;
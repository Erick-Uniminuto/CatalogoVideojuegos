// Funcion para validar el nombre del videojuego

import ErrorValidacion from "./ErrorValidacion.js";

function ValidarNombreJuego(juego:string){
  // Si la validacion del juego fue incorrecta se envia un error al usuario
  if(juego.length < 1 || juego.length > 40){
    throw new ErrorValidacion('El nombre del videojuego debe tener de 1 a 40 caracteres');
  };
  // Si el juego se valida correctamente lo devuelvo preparado para almacenar
  return juego.toLowerCase();
};


export default ValidarNombreJuego;
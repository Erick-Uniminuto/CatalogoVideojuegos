// Validacion para el estado del videojuego

import ErrorValidacion from "./ErrorValidacion.js";

function ValidarEstadoJuego(estado:string){
  const estado_new = estado.toLocaleLowerCase();
  if(estado_new === 'deseado' || estado_new === 'completado' || estado_new === 'adquirido' || 
    estado_new === 'proximamente'){
      return estado_new
    }
  throw new ErrorValidacion('El estado del juego debe ser deseado, completado, adquirido o proximo lanzamiento');
}


export default ValidarEstadoJuego;
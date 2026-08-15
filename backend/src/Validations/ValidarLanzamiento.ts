// Funcion para validar la fecha de lanzamiento de un videojuego

import ErrorValidacion from "./ErrorValidacion.js";

// El formato de fecha sera YYYY-MM-DD

// Funcion para validar el dia
function ValidarDia(dia:string){
  if(!/^([3][0-1]|[0-2][0-9])$/.test(dia)){
    throw new ErrorValidacion('El dia debe contar con un solo numero de dos digitos y estar entre 01 y 31'); 
  }
  return true;
};

// Funcion para validar el mes
function ValidarMes(mes:string){
  if(!/^([1][0-2]|[0][1-9])$/.test(mes)){
    throw new ErrorValidacion('El mes debe contar con un solo numero de dos digitos y estar entre 01 y 12'); 
  }
  return true;
};

// Funcion para validar el año
function ValidarAnio(anio:string){
  if(!/^[0-9]{4}$/.test(anio)){
    throw new ErrorValidacion('El año debe estar entre 0000 y 9999');
  };
  return true;
};


function ValidarLanzamiento(fecha:string){
  // Separo el año, mes y dia, debo asegurarme de que existan tres campos
  const fechaLanzamiento:Array<string> = fecha.split('-');
  // Si la fecha no es valida se le indica al usuario
  if(fechaLanzamiento.length < 3 || fechaLanzamiento.length > 3){
    throw new ErrorValidacion('La fecha de lanzamiento debe seguir el formato YYYY-MM-DD');
  };
  // Tomare el año, mes y dia para validar
  // @ts-ignore
  ValidarAnio(fechaLanzamiento.at(0));
  // @ts-ignore
  ValidarMes(fechaLanzamiento.at(1));
  // @ts-ignore
  ValidarDia(fechaLanzamiento.at(2));
  return fecha
};


export default ValidarLanzamiento;
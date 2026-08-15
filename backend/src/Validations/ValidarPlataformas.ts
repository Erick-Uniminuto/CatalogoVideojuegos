// Funcion para validar las plataformas de un videojuego

import ErrorValidacion from "./ErrorValidacion.js";

// Las plataformas disponibles seran xbox, nintendo switch, playstation, steam
// epic games store, wii, NES 

function ValidarPlataformas(plataformas:Array<string>){
  const data: Array<string> = [];
  // Las plataformas deben contar con un minimo y maximo de longitud
  // Recorro la lista de todas las plataformas donde se encuentra disponible el titulo
  for(let plataforma of plataformas){
    plataforma = plataforma.toLowerCase();
    // Si la plataforma es alguna de las registradas
    // @ts-ignore
    if(plataforma === 'xbox' || plataforma === 'nintendo switch' || 
      plataforma === 'playstation' || plataforma === 'steam' || 
      plataforma === 'epic games store'
      || plataforma === 'wii' || plataforma === 'nes'){
        data.push(plataforma);
        continue
      }
    // Si la plataforma no es valida se indica un error al usuario
    throw new ErrorValidacion(`La plataforma ${plataforma} no es valida`);
  }
  // Si es correcta la validacion, devuelvo una lista con los datos listos para insertar
  return data
};


export default ValidarPlataformas;
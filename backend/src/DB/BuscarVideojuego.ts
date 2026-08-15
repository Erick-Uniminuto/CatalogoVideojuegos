// Funcion para realizar busqueda por palabra clave en la base de datos

import mongoose from "mongoose";
import ConsultarVideojuegosSchema from "./Schema/ConsultarVideojuegosSchema.js";

async function BuscarVideojuego(palabra:string){
  try {
    // Me conecto a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    // Obtengo los videojuegos almacenados en la base de datos
    const videojuegos = await ConsultarVideojuegosSchema.find();
    await mongoose.connection.close();
    let resultados = [];
    // Recorro los registros para encontrar juegos y generos que coninciden con la busqueda
    for(let juego of videojuegos){
      // @ts-ignore
      if(juego.nombre_juego?.startsWith(palabra.at(0)) || juego.genero?.startsWith(palabra.at(0))){
        resultados.push(juego)
      }
    }
    return [200, resultados]
  } catch (error) {
    return [500, 'Hubo un error por nuestra parte']
  }
};


export default BuscarVideojuego;
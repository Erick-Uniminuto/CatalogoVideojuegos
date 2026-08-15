// Funcion para obtener todos los juegos de la coleccion del usuario

import mongoose from "mongoose";
import ColeccionUsuarioSchema from "./Schema/ColeccionUsuarioSchema.js";

async function BusquedaJuegoColeccionUsuario(id_usuario:string, palabra:string){
  try {
    // Me conecto a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    const datos = await ColeccionUsuarioSchema.findById(id_usuario);
    // Si no existe una coleccion para el usuario le indico el error
    if(!datos){
      await mongoose.connection.close()
      return [404, 'Usuario no encontrado']
    }
    await mongoose.connection.close();
    // Realizo la busqueda con la palabra clave, y muestro al usuario los resultados de 
    // la busqueda.
    let resultados = [];
    for(let dato of datos.coleccion){
      if(dato.nombre_juego.startsWith(palabra.at(0)) || dato.genero.startsWith(palabra.at(0))){
        resultados.push(dato)
      }
    }
    return [200, resultados];
  } catch (error) {
    return [500, 'Hubo un error por nuestra parte']
  }
}

export default BusquedaJuegoColeccionUsuario;
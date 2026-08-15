// Funcion para obtener detalles de un videojuego en la base de datos

import mongoose, { mongo } from "mongoose";
import ConsultarVideojuegosSchema from "./Schema/ConsultarVideojuegosSchema.js";

async function DetallesVideojuego(id_usuario:string){
  try {
    // Me conecto a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    const existeJuego = await ConsultarVideojuegosSchema.find({_id:id_usuario});
    // Verifico que exista un juego con el ID dado, si no es asi, devuelvo error
    if(!existeJuego || existeJuego.length <= 0){
      await mongoose.connection.close();
      return [404, 'No se ha encontrado un videojuego']
    }
    // Si el videojuego existe, cierro la conexion y lo retorno al usuario
    await mongoose.connection.close();
    return [200, existeJuego]
  } catch (error) {
    return [500, 'Ha ocurrido un error por nuestra parte']
  }
}


export default DetallesVideojuego;
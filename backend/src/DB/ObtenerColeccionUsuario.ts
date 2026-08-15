// Funcion para obtener todos los juegos de la coleccion del usuario

import mongoose from "mongoose";
import ColeccionUsuarioSchema from "./Schema/ColeccionUsuarioSchema.js";

async function ObtenerColeccionUsuario(id_usuario:string){
  try {
    // Me conecto a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    const datos = await ColeccionUsuarioSchema.findById(id_usuario);
    // Si no existe una coleccion para el usuario le indico el error
    if(!datos){
      await mongoose.connection.close()
      return [404, 'Usuario no encontrado']
    }
    // Si existe la coleccion del usuario, la retorno con un codigo de exito
    await mongoose.connection.close();
    return [200, datos.coleccion];
  } catch (error) {
    return [500, 'Hubo un error por nuestra parte']
  }
}

export default ObtenerColeccionUsuario;
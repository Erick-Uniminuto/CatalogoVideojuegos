// Funcion para eliminar un juego de la coleccion del usuario

import mongoose from "mongoose";
import EliminarJuegoUsuarioSchema from "./Schema/EliminarJuegoUsuarioSchema.js";

async function  EliminarJuegoColeccionUsuario(id_juego:string, token:string){
  try {
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    const usuarioExiste = await EliminarJuegoUsuarioSchema.findById(token);
    // Si el usuario a el que agregare el juego no existe, envio error al usuario
    if(!usuarioExiste){
      await mongoose.connection.close();
      return [404, 'Usuario no encontrado']
    }
    if(!usuarioExiste.coleccion.id(id_juego)){
      return [404, 'El juego que se desea eliminar no existe']
    }

    // Elimino de la coleccion del usuario el videojuego
    usuarioExiste.coleccion.pull({_id:id_juego})
    await usuarioExiste.save()
    
    // Se cierra la conexion a la base de datos y envio codigo exitoso al usuario
    // si se elimino el videojuego
    await mongoose.connection.close()
    return [200,'Juego eliminado correctamente'] 
  } catch (error) {
    return [500, 'Hubo un error por parte del servidor']
  }  
}

export default EliminarJuegoColeccionUsuario;
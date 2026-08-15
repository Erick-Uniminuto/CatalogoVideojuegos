// Funcion para obtener los detalles de un juego que se encuentra en la coleccion del usuario

import mongoose from "mongoose";
import NuevoJuegoUsuarioSchema from "./Schema/NuevoJuegoUsuarioSchema.js";

async function DetallesJuegoDeColeccionUsuario(id_usuario:string, id_juego:string){
  try {
    // Me conecto a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    const datos = await NuevoJuegoUsuarioSchema.findById(id_usuario);
    // Si no encuentro una coleccion para el usuario, envio un error indicandolo
    if(!datos){
      mongoose.connection.close();
      return [404, 'El usuario no tiene una coleccion']
    }
    mongoose.connection.close();
    let juego_buscado = datos.coleccion.id(id_juego)
    // Si el juego que el usuario desea editar no existe se lanza un error
    if(!juego_buscado){
      return [404, 'El juego no existe']
    }
    // Si todo salio bien, retorno el videojuego
    return [200, juego_buscado]
  } catch (error) {
    return [500, 'Hubo un error por nuestra parte']
  }
};


export default DetallesJuegoDeColeccionUsuario;
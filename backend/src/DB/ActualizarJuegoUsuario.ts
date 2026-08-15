// Funcion para actualizar un juego existente en la coleccion de un usuario

import mongoose from "mongoose";
import NuevoJuegoUsuarioSchema from "./Schema/NuevoJuegoUsuarioSchema.js";

async function ActualizarJuegoUsuario(
  id_usuario:string,
  id_producto:string,
  nombre:string,
  genero:string,
  plataformas:string,
  lanzamiento:string,
  desc:string,
  imagen:string,
  estado:string
){
  try {
    // Conexion a mongoDB
    await mongoose.connect('mongodb://localhost:27017/videogames_collection'); 
    const ExisteUsuario = await NuevoJuegoUsuarioSchema.exists({_id:id_usuario});
    // Si el usuario no tiene una coleccion creada en la base de datos, salta error
    if(!ExisteUsuario){
      return [404, 'No logramos encontrar una coleccion para el usuario']
    };
    // Si el usuario existe se hace la actualizacion del juego
    // Busco la coleccion del usuario
    let ObtenerDatos = await NuevoJuegoUsuarioSchema.findById(id_usuario);
    // Valido que el usuario tenga en su coleccion el juego que desea actualizar
    // @ts-ignore
    if(!ObtenerDatos.coleccion.id(id_producto)){
      return [404, 'El juego que se desea actualizar no existe']
    }
    // Actualizo todos los campos del videojuego enviados por el usuario
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).nombre_juego = nombre;
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).genero = genero;
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).plataformas = plataformas;
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).lanzamiento = lanzamiento;
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).desc = desc;
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).imagen = imagen;
    // @ts-ignore
    ObtenerDatos.coleccion.id(id_producto).estado = estado;

    // Actualizo la base de datos y cierro la conexion
    // @ts-ignore
    await ObtenerDatos.save()
    await mongoose.connection.close();
    return [200, 'El videojuego ha sido actualizado con exito'];

  } catch (error) {
    return [500, 'Ha ocurrido un error de nuestra parte'];
  }
}


export default ActualizarJuegoUsuario;
// Funcion para agregar el nuevo juego a la coleccion del usuario

import mongoose from "mongoose";
import NuevoJuegoUsuarioSchema from "./Schema/NuevoJuegoUsuarioSchema.js";

async function NuevoJuegoUsuario(
  id_usuario:string,
  nombre:string, 
  genero:string, 
  plataformas:Array<string>,
  lanzamiento:string,
  desc:string,
  imagen:string,
  estado:string){
    
    try {
      await mongoose.connect('mongodb://localhost:27017/videogames_collection');
      const usuarioExiste = await NuevoJuegoUsuarioSchema.exists({_id:id_usuario});
      // Si el usuario a el que agregare el juego no existe, envio error al usuario
      if(!usuarioExiste){
        await mongoose.connection.close();
        return [404, 'Usuario no encontrado']
      }
      // Agrego a la coleccion del usuario el nuevo videojuego
      const resultado = await NuevoJuegoUsuarioSchema.findByIdAndUpdate(id_usuario,
        {$push:{coleccion:[{
          nombre_juego:nombre,
          genero:genero,
          plataformas:plataformas,
          lanzamiento:lanzamiento,
          desc:desc,
          imagen:imagen,
          estado:estado
        }]}}
      )
      // Se cierra la conexion a la base de datos y envio codigo exitoso al usuario
      // si se agrego correctamente el videojuego
      await mongoose.connection.close()
      return [200,'Juego agregado correctamente'] 
    } catch (error) {
      return [500, 'Hubo un error por parte del servidor']
    }
}

export default NuevoJuegoUsuario;
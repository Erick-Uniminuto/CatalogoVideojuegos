// Funcion para obtener todos los videojuegos de la base de datos

import mongoose from "mongoose";
import ConsultarVideojuegosSchema from "./Schema/ConsultarVideojuegosSchema.js";

async function ConsultarVideojuegos(){
  try {
    // Me conecto a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    // Obtengo todos los registros
    const datos = await ConsultarVideojuegosSchema.find();
    await mongoose.connection.close();
    // Devuelvo un codigo de estado exitoso y todos los datos
    return [200, datos]
  } catch (error) {
    return [500, 'Hubo un error por parte del servidor']
  }
}

export default ConsultarVideojuegos;
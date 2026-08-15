// Modelo para la insercion de un nuevo usuario a la base de datos

import { Schema, model } from "mongoose"

const NuevoUsuarioSchema = new Schema({
  nombre:String,
  correo:String,
  pass:String,
  imagen:String
})

// Exporto el modelo para que pueda ser utilizado
export default model('Usuario',NuevoUsuarioSchema,'users');
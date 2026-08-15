// Archivo que contiene el esquema para interactuar con la coleccion del usuario

import { Schema, model } from "mongoose";

const ColeccionUsuarioSchema = new Schema({
  _id:String,
  coleccion:[]
})

// Exporto el modelo para que pueda ser utilizado
export default model('ColeccionUsuario',ColeccionUsuarioSchema,'catalogo_usuarios');
// Esquema para interactuar con la coleccion de los usuarios

import mongoose, { Schema, model } from "mongoose";

const EliminarJuegoUsuarioSchema = new Schema({
  _id:String,
  coleccion:[{
    _id:mongoose.Types.ObjectId ,
    nombre_juego:String,
    genero:String,
    plataformas:[String],
    lanzamiento:String,
    desc:String,
    imagen:String,
    estado:String
  }]
})

export default model('EliminarJuego',EliminarJuegoUsuarioSchema,'catalogo_usuarios');
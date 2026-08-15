// Esquema para interactuar con la coleccion de los usuarios

import mongoose, { Schema, model } from "mongoose";

const NuevoJuegoUsuarioSchema = new Schema({
  _id:String,
  coleccion:[{
    nombre_juego:String,
    genero:String,
    plataformas:[String],
    lanzamiento:String,
    desc:String,
    imagen:String,
    estado:String
  }]
})

export default model('NuevoJuego',NuevoJuegoUsuarioSchema,'catalogo_usuarios');
// Esquema para consultar videojuegos

import mongoose, { Schema, Types, model } from "mongoose";

const ConsultarVideojuegosSchema = new Schema({
  _id:Types.ObjectId,
  nombre_juego:String,
  genero:String,
  plataformas:[String],
  lanzamiento:String,
  desc:String,
  imagen:String
})

export default model('ConsultarVideojuego',ConsultarVideojuegosSchema,'catalogo')
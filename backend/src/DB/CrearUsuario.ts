import mongoose from "mongoose";
import NuevoUsuarioSchema from './Schema/NuevoUsuarioSchema.js'
import ColeccionUsuarioSchema from "./Schema/ColeccionUsuarioSchema.js";

// Funcion para conectarse con la base de datos y crear un nuevo usuario

async function CrearUsuario(nombre:string, corr:string, pass:string, imagen:string){
  // Conectandose a la base de datos
  try {
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    // Validar si el usuario que se intenta crear ya existe
    const existencia_usuario = await NuevoUsuarioSchema.exists({correo:corr})
    if(existencia_usuario){
      await mongoose.connection.close();
      return [403,'El correo ingresado ya se encuentra asignado a una cuenta']
    }
    await NuevoUsuarioSchema.create({
      nombre:nombre,
      correo:corr,
      pass:pass,
      imagen:imagen
    })
    let ID_usuario = await NuevoUsuarioSchema.findOne({correo:corr})
    // @ts-ignore
    ID_usuario = ID_usuario?._id.toString();
    await ColeccionUsuarioSchema.create({
      // @ts-ignore
      _id:ID_usuario,
      coleccion:[]
    });
    await mongoose.connection.close();
    return [201,'El usuario fue creado con exito' ]
    // Si el usuario se agrega exitosamente no salta error

  // En caso de haber un error se corta la conexion a la base de datos
  } catch (error) {
    mongoose.connection.close()
    return [500,'Hubo un error por parte del servidor']
  }
};


export default CrearUsuario;
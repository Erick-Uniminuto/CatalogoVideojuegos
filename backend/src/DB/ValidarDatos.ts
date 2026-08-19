// Funcion para iniciar sesion y validar los datos del usuario

import mongoose from "mongoose";
import NuevoUsuarioSchema from "./Schema/NuevoUsuarioSchema.js";
import ValidarHash from "../security/ValidarHash.js";

async function ValidarDatos(corr:string, password:string){
  try {
    // Conexion a la base de datos
    await mongoose.connect('mongodb://localhost:27017/videogames_collection');
    const existenciaUsuario = await NuevoUsuarioSchema.exists({correo:corr});
    // Si el usuario no existe en la base de datos se indica un error
    if(!existenciaUsuario){
      await mongoose.connection.close();
      return [404, 'Correo o contraseña incorrectos']
    };
    const dummyData = await NuevoUsuarioSchema.findOne({correo:corr});
    // Obtengo la contraseña del usuario
    const UserPass = dummyData?.pass || ''; 
    await mongoose.connection.close();
    // Validacion de la contraseña con el hash
    const resultado = ValidarHash(password,UserPass).then(ans => {
      // Si la validacion fue correcta se envia al usuario un mensaje de exito
      if(ans){
        return [200, dummyData?._id.toString(), dummyData?.nombre, corr, dummyData?.imagen];
      }
      // Si la validacion no fue valida, se envia al usuario un mensaje de error
      return [404, 'Correo o contraseña incorrectos']
    })
    return resultado
  } catch (error) {
    await mongoose.connection.close()
    return [500,'Hubo un error por parte del servidor']
  }
}; 


export default ValidarDatos;
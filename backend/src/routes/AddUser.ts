import express, { Router } from 'express';
import ValidarNombreUsuario from '../Validations/ValidarNombreUsuario.js';
import ValidarContraseña from '../Validations/ValidarContraseña.js';
import ValidarCorreo from '../Validations/ValidarCorreo.js';
import ValidarImagen from '../Validations/ValidarImagen.js';
import CrearUsuario from '../DB/CrearUsuario.js';
import HashPassword from '../security/HashPassword.js';

// Declaro un router para usar luego en la API principal
const AddUserRouter:Router = express.Router();

// Ruta para crear un nuevo usuario
AddUserRouter.post('/new/user', (req, res) => {
  try {
    // Obtener los datos del usuario
    const nombre:string = req.body.nombre || '';
    const password:string = req.body.pass || '';
    const correo:string = req.body.correo || '';
    const URLImagen:string = req.body.imagen || '';
    // Validacion del nombre de usuario
    ValidarNombreUsuario(nombre);
    // Validacion de la contraseña
    ValidarContraseña(password);
    // Validacion del correo electronico
    ValidarCorreo(correo);
    // Validacion para la URL de la imagen
    ValidarImagen(URLImagen);
    // Crear un hash para la contraseña para no guardarla en texto plano
    HashPassword(password).then(hashed => {
      // Agregar la informacion validada del usuario a la base de datos MongoDB
      CrearUsuario(nombre,correo,hashed,URLImagen).then(ans => {
        // @ts-ignore
        res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)})
      })
    })
  } catch (error) {
    // @ts-ignore
    res.status(403).set({'Content-Type':'application/json'}).json({'msg':error.message})
    // Si hay un error se devuelve al usuario un error y el contenido en un JSON
  }
})


export default AddUserRouter
// Ruta para validar el inicio de sesion de un usuario

import express, { Router } from 'express';
import ValidarCorreo from '../Validations/ValidarCorreo.js';
import ValidarContraseña from '../Validations/ValidarContraseña.js';
import ValidarDatos from '../DB/ValidarDatos.js';
import CrearToken from '../security/CrearToken.js';

const IniciarSesionRouter:Router = express.Router();

IniciarSesionRouter.post('/verify', (req,res) => {
  try {
    // Obtengo el correo y contraseña enviados por el usuario
    const correoUsuario:string = req.body.correo || null;
    const passUsuario:string = req.body.pass || null;
    // Valido el correo y la contraseña
    ValidarContraseña(passUsuario);
    ValidarCorreo(correoUsuario);
    // Consultar la base de datos para validar si la informacion es correcta
    ValidarDatos(correoUsuario,passUsuario).then(ans => {
      // Si algo salio mal se devuelve un error al usuario
      if(ans?.at(0) != 200){
        // @ts-ignore
        res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
        return
      }
      // Si el inicio de sesion fue exitoso se crea el token y envia al usuario
      // @ts-ignore
      res.status(ans.at(0)).set({
        'Content-Type':'application/json'
        // @ts-ignore
      }).json({'msg':CrearToken(ans.at(2),ans.at(3),ans.at(1), ans.at(4))})
    });
    return
  } catch (error) {
    // @ts-ignore
    res.status(403).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

export default IniciarSesionRouter;
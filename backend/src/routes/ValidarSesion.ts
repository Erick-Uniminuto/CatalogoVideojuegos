// Ruta que me permite validar si el token que usa el usuario es correcto

import express, { Router } from 'express';
import ValidarToken from '../Validations/ValidarToken.js';

const ValidacionSesionRouter:Router = express.Router();

ValidacionSesionRouter.post('/validate', (req, res) => {
  try {
    // Recupero el token de las cabeceras. si no existe, envio un string vacio
    const getToken = req.body.cookie || 'token=null';
    // @ts-ignore
    ValidarToken(getToken.split('=').at(1))
    // Si el token es correcto el envio al usuario una respuesta buena
    res.status(200).set({'Content-Type':'application/json'}).json({'msg':'Token validado'})
  } catch (error) {
    // @ts-ignore
    res.status(401).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

export default ValidacionSesionRouter;
// Ruta para obtener informacion sobre los videojuegos en la coleccion de un usuario

import express, { Router } from 'express';
import DecodificarToken from '../security/DecodificarToken.js';
import ObtenerColeccionUsuario from '../DB/ObtenerColeccionUsuario.js';
import BusquedaJuegoColeccionUsuario from '../DB/BuquedaJuegoColeccionUsuario.js';
import DetallesJuegoDeColeccionUsuario from '../DB/DetallesJuegoDeColeccionUsuario.js';
import EliminarJuegoColeccionUsuario from '../DB/EliminarJuegoColeccionUsuario.js';

// Router para interactuar con la coleccion de los usuarios
const ObtenerColeccionUsuarioRouter:Router = express.Router();

// Ruta para obtener toda la coleccion del usuario
ObtenerColeccionUsuarioRouter.get('/user/collection/:id', (req,res) => {
  try {
    // Obtengo el token del usuario y su informacion relacionada
    const tokenUsuario = DecodificarToken(req.params.id || '');
    // @ts-ignore
    const idUsuario = tokenUsuario.id;
    
    // Conecto a la base de datos para obtener todos los juegos de la coleccion
    ObtenerColeccionUsuario(idUsuario).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
      // Dependiendo de la respuesta para la base de datos, obtengo una buena o mala respuesta
    })
    return
  } catch (error) {
    // @ts-ignore
    res.status(404).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

ObtenerColeccionUsuarioRouter.get('/user/collection/search/:word/:id', (req,res) => {
  try {
    // Obtengo el token del usuario y su informacion relacionada
    const tokenUsuario = DecodificarToken(req.params.id || '');
    // @ts-ignore
    const idUsuario = tokenUsuario.id
    // Obtengo la palabra de busqueda para el usuario
    const palabra_busqueda = req.params.word || '';

    // Consulto la base de datos para obtener los resultados de la busqueda
    BusquedaJuegoColeccionUsuario(idUsuario, palabra_busqueda.toLowerCase()).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)})
      // Devuelvo una respuesta o codigo de estado dependiendo de la base de datos.
    })

  } catch (error) {
    // @ts-ignore
    res.status(404).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

ObtenerColeccionUsuarioRouter.get('/user/collection/details/:id_juego/:id', (req,res) => {
  try {
    // Obtengo el token del usuario y su informacion relacionada
    const tokenUsuario = DecodificarToken(req.params.id || '');
    // @ts-ignore
    const idUsuario = tokenUsuario.id
    // Obtengo la palabra de busqueda para el usuario
    const idJuego = req.params.id_juego || '';

    // Consulto la base de datos para obtener los resultados del juego buscado
    DetallesJuegoDeColeccionUsuario(idUsuario,idJuego).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
      // Dependiendo del resultado de la base de datos, le indico al usuario un error o exito.
    })

  } catch (error) {
    // @ts-ignore
    res.status(404).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

ObtenerColeccionUsuarioRouter.delete('/delete/:id/:token', (req,res) => {
  try {
    const ObtenerIDJuego = req.params.id || '';
    // Obtengo el token del usuario y su informacion relacionada
    const tokenUsuario = DecodificarToken(req.params.token || '');
    // @ts-ignore
    const idUsuario = tokenUsuario.id

    // Funcion para eliminar el juego de la coleccion del usuario
    EliminarJuegoColeccionUsuario(ObtenerIDJuego,idUsuario).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
      // Dependiendo del resultado de la base de datos, le indico al usuario un error o exito.
    })
    return
  } catch (error) {
    // @ts-ignore
    res.status(404).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

export default ObtenerColeccionUsuarioRouter;
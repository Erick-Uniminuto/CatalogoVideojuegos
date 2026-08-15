// Ruta para obtener todos los videojuegos

import express, { Router } from 'express';
import ConsultarVideojuegos from '../DB/ConsultarVideojuegos.js';
import DetallesVideojuego from '../DB/DetallesVideojuego.js';
import BuscarVideojuego from '../DB/BuscarVideojuego.js';

// Router para obtener los videojuegos
const ObtenerVideojuegosRouter:Router = express.Router();

// Enpdoint para obtener todos los videojuegos
ObtenerVideojuegosRouter.get('/games', (req, res) => {
  try {
    // Consulto la base de datos para devolver los videojuegos
    ConsultarVideojuegos().then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)})
    })
    return
  } catch (error) {
    // @ts-ignore
    res.status(500).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

// Ruta para obtener detalles de un videojuego especifico, basandome en su ID
ObtenerVideojuegosRouter.get('/games/detail/:id', (req,res) => {
  // Obtengo el ID del videojuego a buscar
  const idVideojuego:string = req.params.id;
  DetallesVideojuego(idVideojuego).then(ans => {
    // Devuelvo una respuesta al usuario
    // @ts-ignore
    res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
    // El codigo de estado depende de la respuesta que devuelva la base de datos
  })
})

// Ruta para realizar busqueda de videojuegos por palabra clave
ObtenerVideojuegosRouter.get('/games/search/:word', (req, res) => {
  try {
    // Obtengo la busqueda del usuario
    const palabra = req.params.word;
    // Si se envia una cadena vacia se envia un error al usuario
    if(palabra.length <= 0 || palabra.startsWith(' ')){
      throw new Error('Por favor ingresa una palabra para realizar la busqueda');
    }

    // Busco en la base de datos coincidencias con la busqueda
    BuscarVideojuego(palabra).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)})
      // Dependiendo del resultado de la base de datos entrego una respuesta u otra
    })

    return

  } catch (error) {
    // @ts-ignore
    res.status(404).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

export default ObtenerVideojuegosRouter;
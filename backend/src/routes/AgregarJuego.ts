// Ruta para agregar un nuevo juego a la base de datos, en la coleccion del usuario

import express, { Router } from 'express';
import ValidarNombreJuego from '../Validations/ValidarNombreJuego.js';
import ValidarGeneroJuego from '../Validations/ValidarGeneroJuego.js';
import ValidarPlataformas from '../Validations/ValidarPlataformas.js';
import ValidarLanzamiento from '../Validations/ValidarLanzamiento.js';
import ValidarDescripcion from '../Validations/ValidarDescripcion.js';
import ValidarImagen from '../Validations/ValidarImagen.js';
import DecodificarToken from '../security/DecodificarToken.js';
import NuevoJuegoUsuario from '../DB/NuevoJuegoUsuario.js';
import ValidarEstadoJuego from '../Validations/ValidarEstadoJuego.js';

const AgregarJuegoRoute:Router = express.Router();

// Ruta para agregar el juego a la coleccion del usuario
AgregarJuegoRoute.post('/add/game', (req, res) => {
  try {
    // Obtengo el token del usuario y lo decodifico, en caso de no tener se envia un
    // string vacio.

    // @ts-ignore
    let InfoUsuario = DecodificarToken(req.body.token || '');
    // @ts-ignore
    InfoUsuario = InfoUsuario.id;
    // Obtengo todos los datos del videojuego, sino hay dato, coloco string vacio
    // y los valido de una vez.
    const nombre_juego = ValidarNombreJuego(req.body.nombre_juego || '');
    const genero = ValidarGeneroJuego(req.body.genero || '');
    const plataformas = ValidarPlataformas(req.body.plataformas || ['']);
    const lanzamiento = ValidarLanzamiento(req.body.lanzamiento || '');
    const descripcion = ValidarDescripcion(req.body.desc || '');
    ValidarImagen(req.body.imagen || '');
    const imagen = req.body.imagen;
    const estado = ValidarEstadoJuego(req.body.estado || 'deseado');

    // Agrego la informacion validada a la base de datos
    // @ts-ignore 
    NuevoJuegoUsuario(InfoUsuario,nombre_juego,genero,plataformas,lanzamiento,descripcion,imagen,estado).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
    })
    return
  } catch (error) {
    // Si existe un error validando los datos
    // @ts-ignore
    res.status(400).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

export default AgregarJuegoRoute;
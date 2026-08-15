// Ruta para modificar un videojuego dentro de la coleccion del usuario

import express, { Router } from 'express';
import DecodificarToken from '../security/DecodificarToken.js';
import ValidarNombreJuego from '../Validations/ValidarNombreJuego.js';
import ValidarGeneroJuego from '../Validations/ValidarGeneroJuego.js';
import ValidarPlataformas from '../Validations/ValidarPlataformas.js';
import ValidarDescripcion from '../Validations/ValidarDescripcion.js';
import ValidarLanzamiento from '../Validations/ValidarLanzamiento.js';
import ValidarImagen from '../Validations/ValidarImagen.js';
import ActualizarJuegoUsuario from '../DB/ActualizarJuegoUsuario.js';
import ValidarEstadoJuego from '../Validations/ValidarEstadoJuego.js';

// Creo el router para editar videojuegos
const EditarVideoJuegoRouter:Router = express.Router();

// Se editara un videojuego en base a un ID dado

EditarVideoJuegoRouter.put('/edit/game/:id', (req,res) => {
  try {
    // Obtengo la informacion del usuario por medio del token
    let IDUsuario = DecodificarToken(req.body.token || '');
    // @ts-ignore
    IDUsuario = IDUsuario.id;

    // Obtengo todos los datos del videojuego, sino hay dato, coloco string vacio
    // y los valido de una vez.
    const nombre_juego = ValidarNombreJuego(req.body.nombre_juego || '');
    const genero = ValidarGeneroJuego(req.body.genero || '');
    const plataformas = ValidarPlataformas(req.body.plataformas || ['']);
    const lanzamiento = ValidarLanzamiento(req.body.lanzamiento || '');
    const descripcion = ValidarDescripcion(req.body.desc || '');
    ValidarImagen(req.body.imagen || '');
    const imagen = req.body.imagen;
    const estado = ValidarEstadoJuego(req.body.estado || '');

    // Actualizar en la base de datos un juego existente para el usuario
    // @ts-ignore
    ActualizarJuegoUsuario(IDUsuario,req.params.id,nombre_juego,genero,plataformas,lanzamiento,descripcion,imagen, estado).then(ans => {
      // @ts-ignore
      res.status(ans.at(0)).set({'Content-Type':'application/json'}).json({'msg':ans.at(1)});
    })

    return

  } catch (error) {
    // @ts-ignore
    res.status(400).set({'Content-Type':'application/json'}).json({'msg':error.message})
  }
})

export default EditarVideoJuegoRouter;
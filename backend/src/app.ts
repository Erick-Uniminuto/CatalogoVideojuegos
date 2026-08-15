import express from 'express';
import AddUserRouter from './routes/AddUser.js';
import IniciarSesionRouter from './routes/IniciarSesion.js';
import ValidacionSesionRouter from './routes/ValidarSesion.js';
import AgregarJuegoRoute from './routes/AgregarJuego.js';
import EditarVideoJuegoRouter from './routes/EditarVideojuego.js';
import ObtenerVideojuegosRouter from './routes/ObtenerVideojuegos.js';
import ObtenerColeccionUsuarioRouter from './routes/ObtenerColeccionUsuario.js';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
// @ts-ignore
import specs from '../../swagger.js';



// Creo la aplicacion de express
const app = express();
app.use(cors({
  origin:'*',
  credentials:true
}))
app.use(express.json()) // Middleware para convertir las peticiones a JSON
app.use("/docs",swaggerUI.serve, swaggerUI.setup(specs))

// Defino el puerto que utilizara la API
const PORT = 3000;

// Exporto el endpoint encargado de agregar un nuevo usuario ✅
app.use('/', AddUserRouter);

// Exporto el endpoint encargado de validar el inicio de sesion 
// del usuario ✅
app.use('/', IniciarSesionRouter)

// Endpoint para validar el token del usuario ✅
app.use('/', ValidacionSesionRouter)

// Endpoint para agregar un nuevo juego ✅
app.use('/', AgregarJuegoRoute)

// Endpoint para editar un juego dentro de la coleccion del usuario ✅
app.use('/', EditarVideoJuegoRouter)

// Enpdoint para obtener todos los videojuegos ✅
app.use('/', ObtenerVideojuegosRouter)

// Endpoint para obtener toda la coleccion del usuario ✅
app.use('/', ObtenerColeccionUsuarioRouter)

// Inicio el servidor para que comience a escuchar
app.listen(PORT, () => {
  console.log('Corriendo servidor')
})


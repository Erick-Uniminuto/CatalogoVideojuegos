import './App.css'
import { Route, Routes } from 'react-router-dom'
import Registro from './pages/Registro/Registro'
import NoEncontrada from './pages/NoEncontrada/NoEncontrada'
import Landing from './pages/Landing/Landing'
import IniciarSesion from './pages/IniciarSesion/IniciarSesion'
import InformacionUsuario from './pages/InformacionUsuario/InformacionUsuario'
import Home from './pages/Home/Home'
import EditarVideojuego from './pages/EditarVideojuego/EditarVideojuego'
import DetalleUsuario from './pages/DetalleUsuario/DetalleUsuario'
import Detalles from './pages/Detalles/Detalles'
import Catalogo from './pages/Catalogo/Catalogo'
import AgregarVideojuego from './pages/AgregarVideojuego/AgregarVideojuego'
import Auth from './components/Auth/Auth'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

// Defino las rutas de la aplicacion web

function App() {
  return (
    <>
    <div className="acomodador">
      <Navbar/>
        <main className="contenido">
          <Routes>
            {/* Rutas no protegidas */}
            <Route path='/' element={<Landing/>} />
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/*' element={<NoEncontrada/>}/>
            <Route path='/iniciar/sesion' element={<IniciarSesion/>}/>
            {/* ------------------- */}
            {/* Rutas protegidas */}
            <Route element={<Auth/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/user' element={<InformacionUsuario/>}/>
              <Route path='/editar-juego/:id' element={<EditarVideojuego/>}/>
              <Route path='/detalle/juego/usuario/:id' element={<DetalleUsuario/>}/>
              <Route path='/detalle/:id' element={<Detalles/>}/>
              <Route path='/catalogo' element={<Catalogo/>}/>
              <Route path='/agregar-juego' element={<AgregarVideojuego/>}/>
            </Route>
            {/* ---------------- */}
          </Routes>
        </main>
      <Footer/>
    </div>
    </>
  )
}

export default App

// Quede en hacer el footer, navbar y ajustarlo con el content
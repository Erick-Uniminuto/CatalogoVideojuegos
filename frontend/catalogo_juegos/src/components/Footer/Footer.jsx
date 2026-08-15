import './Footer.css'
import { Link } from 'react-router-dom';
import Icono from '../Icono/Icono';

function Footer(){
  return(
    <footer className="container-fluid pt-3 mt-5">
      <div className="container-lg">
        <div className="row text-center" id='contenedor-footer-opciones'>
          <div className="col text-start" id='control-footer-container'>
            <Link className="navbar-brand" to="/">
              <img className="icon-nav" src="https://cdn.creazilla.com/icons/3204522/game-controller-icon-md.png" 
              alt="control de una consola de videojuegos" />
            </Link>
            <h5 className='contacto-aviso' aria-label='iconos con diferentes redes sociales'>
              Contactanos
            </h5>
            <div className="redes-sociales">
              <Icono icono={"bi bi-twitter-x"} bg={'black'} radio={'999px'} 
              padx={'.7rem'} pady={'.5rem'} size={'1.1rem'} color={'white'} mt={'.6rem'}/>
              <Icono icono={"bi bi-discord"} bg={'black'} radio={'999px'} 
              padx={'.7rem'} pady={'.5rem'} size={'1.1rem'} color={'white'} mt={'.6rem'}/>
              <Icono icono={"bi bi-instagram"} bg={'black'} radio={'999px'} 
              padx={'.7rem'} pady={'.5rem'} size={'1.1rem'} color={'white'} mt={'.6rem'}/>
              <Icono icono={"bi bi-linkedin"} bg={'black'} radio={'999px'} 
              padx={'.7rem'} pady={'.5rem'} size={'1.1rem'} color={'white'} mt={'.6rem'}/>
            </div>
            <h5 className='contacto mt-3 mb-0' aria-label='correo electronico de la pagina web'>
              Correo electronico
            </h5>
            <h6 className='contacto'>
              coleccionvideojuegos@cv.com
            </h6>
          </div>
          <div className="col d-flex justify-content-center align-items-center" id='boo-container'>
            <img className='boo' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc25ec3f-b1c8-4630-91e9-1e260b289f2d/d91zy67-424b516e-5eee-416e-94a8-cc5cb5eb718a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iYzI1ZWMzZi1iMWM4LTQ2MzAtOTFlOS0xZTI2MGIyODlmMmQvZDkxenk2Ny00MjRiNTE2ZS01ZWVlLTQxNmUtOTRhOC1jYzVjYjVlYjcxOGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2i8hqcKH7jesieJnvsLY-OUEgELq4lLxgpRa9CEeScw" 
            alt="imagen en movimiento de un fantasma" />
          </div>
          <div id='conteneodr-opciones-footer' 
          className="col text-end">
            <Link className='opcion-footer' to='/iniciar/sesion'>
              Iniciar sesión
            </Link>
            <Link className='opcion-footer' to='/registro'>
              Registrarse
            </Link>
            <Link className='opcion-footer' to='/'>
              Pagina principal
            </Link>
            <Link className='opcion-footer' to='/home'>
              Tu coleccion
            </Link>
          </div>
          <hr className='barra-amor mt-2'/>
          <h4 className='text-center mb-3'>
            Hecho con 🤍 Erick
          </h4>
        </div>
      </div>
    </footer>
  )
};


export default Footer;
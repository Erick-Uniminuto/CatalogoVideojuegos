import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter } from 'react-router-dom';
import ObtenerImagenUsuarioContexto from './context/ObtenerImagenUsuarioContexto/ObtenerImagenUsuarioContexto.jsx';

createRoot(document.getElementById('root')).render(
  <ObtenerImagenUsuarioContexto>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ObtenerImagenUsuarioContexto>
)

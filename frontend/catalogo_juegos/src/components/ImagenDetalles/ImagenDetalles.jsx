// Funcion para mostrar la imagen adaptada para la pagina de detalles

import './ImagenDetalles.css'

function ImagenDetalles({ URL, radio }){
  return(
    <img src={URL} alt="Imagen del videojuego seleccionado"
    className="detalle-imagen" style={{borderRadius:radio}}/>
  )
};


export default ImagenDetalles;
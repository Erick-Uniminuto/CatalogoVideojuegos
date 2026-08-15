// Componente que maneja la barra de busqueda

import './BarraNavegacion.css'

function BarraNavegacion({ placeholder, boton }){
  return(
    <form className="d-flex justify-content-center align-items-center" role="search">
      <input className="form-control me-2" id='barra-search' type="search" placeholder={placeholder} 
      aria-label="Barra de busqueda para encontrar juegos por nombre o genero"/>
      {boton}
    </form>
  )
};

export default BarraNavegacion;
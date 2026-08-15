// Componente para un seleccionador multiple

import './Seleccionador.css'

function Seleccionador({ estados, texto  }){
  return(
    <div className="mb-3">
      <label htmlFor="seleccionador" className="form-label">{texto}</label>
      <select className="form-select" id='seleccionador' aria-label="Seleccionador multiple">
        {estados.map(estado => (
          <option value={estado} key={estado}>{estado}</option>
        ))}      
      </select>
    </div>
  )
};


export default Seleccionador;
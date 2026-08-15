// Componente tarjeta

import './Tarjeta.css'

function Tarjeta({ nombre, URL, click, estado }){
  let color = '';
  // Si el juego se encuentra en alguno de los estados validos coloco la etiqueta
  if(estado === 'deseado'){
    color = '#FCA311' 
  }else if(estado === 'completado'){
    color = '#198754' 
  }else if(estado === 'adquirido'){
    color = '#0DCAF0' 
  }else if(estado === 'proximamente'){
    color = '#DC3545' 
  }else{
    estado = null
  }
  return(
    <div className="card border-0" onClick={click}>
      <span className="badge" style={{backgroundColor:color}}>{estado}</span>
      <img src={URL} 
      className="card-img-top rounded-4 border-0" alt={nombre}/>
      <div className="card-body text-center border-0">
        <h3 className="card-title">{nombre}</h3>
      </div>
    </div>
  )
};

export default Tarjeta;
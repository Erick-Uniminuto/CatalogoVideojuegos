// Funcion para crear botones en bloque

import './BotonesBloque.css'

function BotonesBloque({ texto, bg, radio, size, click, mt, fontColor }){
  return(
    <div className="d-grid gap-2" style={{marginTop:mt}}>
      <button className="btn btn-primary border-0" type="button" id="boton-bloque-componente"
      style={{
        backgroundColor:bg,
        borderRadius:radio,
        fontSize:size,
        color:fontColor
      }} onClick={click}>
        {texto}
      </button>
    </div>
  )
};


export default BotonesBloque;
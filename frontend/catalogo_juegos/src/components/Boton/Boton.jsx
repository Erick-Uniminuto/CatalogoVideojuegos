import './Boton.css'

function Boton({ texto, bg, color, size, radio, click,px, type, mt }){
  return(
    <button className="btn" style={{
      backgroundColor:bg,
      color:color,
      fontSize:size,
      borderRadius:radio,
      paddingRight:px,
      paddingLeft:px,
      marginTop:mt
    }} onClick={click} type={type} id='boton-componente'>
      {texto}
    </button>
  )
};


export default Boton;
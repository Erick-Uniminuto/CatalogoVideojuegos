// Componente para entregar un mensaje

function Mensaje({ text, color, size }){
  return(
    <p style={{color:color,fontSize:size}}>
      {text}
    </p>
  )
};


export default Mensaje;
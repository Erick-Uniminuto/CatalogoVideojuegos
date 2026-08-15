import './Imagen.css'

function Imagen({ URL, radio }){
  return(
    <img src={URL} alt="imagen con diferentes videojuegos" 
    className='imagen-component' style={{
      borderRadius:radio,
    }} />
  )
};


export default Imagen;
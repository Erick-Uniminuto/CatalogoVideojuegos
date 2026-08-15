import './Icono.css'
import { Link } from 'react-router-dom';

function Icono({ icono, color, size, bg, padx, radio, pady, mt, click}){
  return(
    <Link className='icono-componente' style={{marginTop:mt}} onClick={click}>
      <i className={icono} style={{color:color, fontSize:size, backgroundColor:bg, 
        paddingLeft:padx, paddingRight:padx, paddingTop:pady,paddingBottom:pady, borderRadius:radio}}/>
    </Link>
  )
}


export default Icono;
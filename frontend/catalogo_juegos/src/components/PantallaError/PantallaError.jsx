// Componente que permite mostrar mensajes de error

import Imagen from "../Imagen/Imagen";

function PantallaError({ texto }){
  return(
    <>
      <h2 className="text-light text-center mb-4">
        {texto}
      </h2>
      <Imagen 
      URL={'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXltdXdoNTRtdG91MjlsaHVrZ3ZiZWptbmt5Mm0xeTlwM2xnZXNmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sqaadptxkKVxvqQeaz/giphy.gif'} 
      />
    </>
  )
};


export default PantallaError;
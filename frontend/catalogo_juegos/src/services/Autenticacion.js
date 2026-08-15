// Funcion para validar que el usuario en realidad tiene sesion iniciada

async function Autenticacion(token){
  // Hago el envio del token
  let peticion = await fetch('http://localhost:3000/validate',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({"cookie":token})
  })
  // Si la respuesta del servidor no fue exitosa, envio un error
  if(peticion.status != 200){
    return false
  }
  // Si el token fue validado correctamente, devuelvo true
  return true
}


export default Autenticacion;
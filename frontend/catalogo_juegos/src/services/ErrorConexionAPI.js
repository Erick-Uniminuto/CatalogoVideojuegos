// Error que se lanzara cuando la API envie un codigo de error

class ErrorConexion extends Error{
  constructor(message){
    super(message)
    this.name = 'ErrorConexion';
  }
}

export default ErrorConexion;
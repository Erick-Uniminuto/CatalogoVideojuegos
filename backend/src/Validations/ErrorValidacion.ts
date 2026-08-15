// Error que saltara cuando una validacion no se pase de forma correcta

class ErrorValidacion extends Error{
  constructor(message:string){
    super(message),
    this.name = 'ErrorValidacion'
  }
}

export default ErrorValidacion;
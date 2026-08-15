// Error que saltara cuando el usuario no tenga una sesion valida iniciada

class ErrorAutenticacion extends Error{
  constructor(message){
    super(message)
    this.name = 'ErrorAutenticacion'
  }
}

export default ErrorAutenticacion;
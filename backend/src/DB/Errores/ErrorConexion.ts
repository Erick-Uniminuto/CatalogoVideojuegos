// Error para validar que la conexion a la base de datos fue exitosa.

class ErrorConexion extends Error{
  constructor(message:string){
    super(message),
    this.name = 'ErrorConexion'
  };
};

export default ErrorConexion;
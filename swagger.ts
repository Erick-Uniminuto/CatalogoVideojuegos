// import swaggerJSDoc from "swagger-jsdoc";

// const options = {
//   definition:{
//     openapi:"3.0.0",
//     info:{
//       title:"Catalogo Videojuegos",
//       version:"1.0.0",
//       description:"API para manejar una aplicacion que gestiona catalogos de videojuegos",
//       servers:[{
//         url:"http://localhost:3000",
//         description:"Servidor principal de la API"
//       }]
//     }
//   },
//   apis:['./api_docs.yaml']
// };

// const specs = swaggerJSDoc(options);
// export default specs;

import YAML from 'yamljs';

const specs = YAML.load('./api_docs.yaml');

export default specs;
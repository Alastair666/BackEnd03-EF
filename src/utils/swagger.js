import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'API de Adopciones',
            version: '1.0.0',
            description: 'API de Adopciones de Mascotas',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT||8080}`,
            }
        ]
    },
    apis: ['./src/routes/*.router.js'] //Lee todas las rutas definidas
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export function serve() { 
    return swaggerUi.serve
};
export function setup() { 
    return swaggerUi.setup(swaggerDocs)
};
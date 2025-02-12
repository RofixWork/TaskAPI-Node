require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const tasksRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/errorHandler');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
// swagegr js doc options
/**
 * @type {import('swagger-jsdoc').Options} options
 */
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Task Manager API',
        version: '1.0.0',
        description: 'This API allows you to manage tasks by providing endpoints to create, read, update, and delete tasks',
        contact: {name:'Rofix'},
        
        servers: ['http://localhost:8000']
      },
    },
    apis: ['./routes/*.js'], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options);
const app = express()

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use(express.json())
app.use(morgan('dev'))

// tasks router
app.use('/api/v1/tasks', tasksRouter)

// Not Found 
app.use('*', notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 8000;

(async  () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, err => {
            if(err) throw new Error(err);
            console.log(`server listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})();


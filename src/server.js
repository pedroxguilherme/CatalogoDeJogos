const express = require('express');
const userController = require('./controllers/userController');
const swaggerUI = require("swagger-ui-express");
const gameController = require('./controllers/gameController');


const app = express();
app.use(express.json());
app.use('/api/user', userController);
app.use('/api', gameController);



app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Documentação Swagger disponível em http://localhost:${PORT}/api-docs`);
});
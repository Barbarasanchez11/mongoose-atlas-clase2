const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');// va en {} porque es un objeto
const routes = require('./routes/index')

app.use(express.json());

app.use('/', routes);

dbConnection();


app.listen(PORT, () => console.log(`Server started on port http://localhost:8080`));
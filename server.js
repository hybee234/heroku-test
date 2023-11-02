const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001

const secretKey = process.env.SEUPER_SECRET_KEY

app.get('/', (req, res) => res.send ('Hello World'));



app.listen (3001, () => {
Console.log ('App is up and running & listening')
});
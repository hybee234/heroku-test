const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => res.send ('Hello WOrld'));


app.listen (3000, () => {
Console.log ('App is up and running & listening')
});
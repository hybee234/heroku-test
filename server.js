const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001
// const secretKey = process.env.SUPER_SECRET_KEY

app.get('/', (req, res) => res.send ('Hello World - Hopefully this goes to Heroku successfully!'));

app.listen (PORT, () => {
console.log ('App is up and running & listening http://localhost:3001/')
});
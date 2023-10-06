const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.get('/prueba-jade', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log('http://localhost:3000');
});
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.locals.nav = (title, menu) => {
  return `
    <nav>
      <h1>${title}</h1>
      <ul>
        <li>${menu}</li>
      </ul>
    </nav>
  `;
};

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/prueba-jade', function (req, res) {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

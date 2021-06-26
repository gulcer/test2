const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 8000;


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/send-mail', (req, res) => {

  fs.writeFile('out.json', JSON.stringify(req.body), 'utf8', () => {
    console.log('Мы записали данные, ура!')
  });
  res.send({
    status: 'prishlo'
  })
});

app.listen(port);

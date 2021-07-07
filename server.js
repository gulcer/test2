const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 8000;
let history;



app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




try {
  history = JSON.parse(fs.readFileSync('out.json', 'utf-8'));
} catch (error) {
  history = []
}

app.post('/send-mail', (req, res) => {
  history.push(req.body)
  fs.writeFile('out.json', JSON.stringify(history, null, 2), 'utf8', () => {
    console.log('Мы записали данные, ура!')
  });
  res.send({
    status: 'prishlo'
  })
});

app.listen(port);


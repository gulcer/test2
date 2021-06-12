const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  res.send(user)
});

// listen on the port
app.listen(port);

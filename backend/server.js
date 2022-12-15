const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  console.log(req.body.name);
});

app.listen('1337', () => {
  console.log(`Server started on port 1337`);
});

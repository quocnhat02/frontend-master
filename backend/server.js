const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const model = require('./user.model');

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/usercollection');

app.post('/api/register', async (req, res) => {
  try {
    const user = await model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/login', (req, res) => {
  console.log(req.body.email);
});

app.listen('1337', () => {
  console.log(`Server started on port 1337`);
});

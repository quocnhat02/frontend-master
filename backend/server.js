const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const model = require('./user.model');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/usercollection');

app.post('/api/register', async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await model.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });

    res.json({ status: 'ok' });
  } catch (error) {
    res.json({ status: 'Duplicate Email' });
  }
});

app.post('/api/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await model.findOne({ email, password });

  if (user) {
    return res.json({ status: 'Logged in' });
  } else {
    return res.json({ status: 'Wrong email or password' });
  }
});

app.listen('1337', () => {
  console.log(`Server started on port 1337`);
});

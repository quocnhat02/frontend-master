const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const model = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

  const user = await model.findOne({ email });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = await jwt.sign(
      { email: user.email, name: user.name },
      'secret123'
    );
    return res.json({ status: 'ok', token });
  } else {
    return res.json({ status: 'Wrong email or password' });
  }
});

app.post('/api/dashboard', async (req, res) => {
  const token = req.headers['x-access-token'];
  const goal = req.body.tempGoal;

  const isTokenValid = await jwt.verify(token, 'secret123');
  const email = isTokenValid.email;

  if (isTokenValid) {
    await model.updateOne({ email }, { $set: { goal } });

    return res.json({ status: 'ok' });
  } else {
    return res.json({ status: 'Invalid Token' });
  }
});

app.get('/api/dashboard', async (req, res) => {
  const token = req.headers['x-access-token'];
  const isValidToken = await jwt.verify(token, 'secret123');

  if (isValidToken) {
    const email = isValidToken.email;
    const goal = await model.findOne({ email });

    return res.json({ status: 'ok', goal });
  } else {
    return res.json('Invalid Token');
  }
});

app.listen('1337', () => {
  console.log(`Server started on port 1337`);
});

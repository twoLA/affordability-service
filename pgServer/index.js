const newrelic = require('newrelic');
const express = require('express');
const pgController = require('../pgDatabase/controller.js');

const app = express();
const PORT = 8020;

app.use(express.json());

app.use('/mortgage/:id', express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.get('*/:id/get', pgController.get);
app.post('*/:id/post', pgController.post);
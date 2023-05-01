const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)
app.use(express.static('public'));

module.exports = app;

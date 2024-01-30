const express = require('express');
const app = express();
const controllers = require('../controllers/controllers');

app.get('/', controllers.defaultRoute);
app.post('/creatBook', controllers.creatBook);
app.get('/showBook',controllers.showBook)
app.get('/editBook/:id',controllers.editBook)
app.post('/updateBook',controllers.updateBook)
app.get('/deletBook/:id',controllers.deletBook)

module.exports = app
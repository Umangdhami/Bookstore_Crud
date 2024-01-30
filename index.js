const express = require('express');
const app = express();
const body_parser = require('body-parser');
const route = require('./routes/routes')
const port = 5010;
const path = require('path');
const staticPath = path.join(__dirname, './public/');
app.use(express.static(staticPath));
const mongoose = require('./database/database')

app.set('view engine', 'ejs');
app.use(body_parser.urlencoded({extended: true}));

mongoose
app.use('/',route);

app.listen(port, () => {
    console.log(`Server running Port ${port}`);
})
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Bookshop').then(() => {
    console.log('Database Connected Successfully...');
}).catch((err) => {
    console.log('err',err);
});

module.exports = mongoose
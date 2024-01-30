const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname : String,
    bookauthor : String,
    pages : Number,
});

const bookModel = mongoose.model('Books', bookSchema);

module.exports = bookModel;
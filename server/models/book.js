const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for books
const BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    finished: Boolean
});

// Create model for Book
const Book = mongoose.model('book', BookSchema);

module.exports = Book;
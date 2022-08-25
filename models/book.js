const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for books
const BookSchema = new Schema({
    title: String,
    author: String,
    description: String
});

// Create model for todo
const Book = mongoose.model('book', BookSchema);

module.exports = Todo;
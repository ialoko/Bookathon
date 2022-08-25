const express = require('express');
const router = express.Router();

router.get('/books', (req, res, next) => {
    // get all books
});

router.post('/books', (req, res, next) => {
    // create book
});

router.delete('/books/:id', (req, res, next) => {
    // delete book by id
});


router.delete('/books', (req, res, next) => {
    // delete all books
});

module.exports = router;
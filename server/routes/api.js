const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//do cheerios form here
router.get('/books', (req, res, next) => {
    // get all books
    Book.find()
        .then((data) => res.json(data))
        .catch(next);
});


router.post('/books', (req, res, next) => {
    // create book
    Book.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
});

//update finishec books
router.put('/books/:id/:complete', (req, res, next) => {
    // update book by id
    Book.findOneAndUpdate({ _id: req.params.id }, { finished: req.params.complete })
        .then((data) => res.json(data))
        .catch(next);
});

router.delete('/books/:id', (req, res, next) => {
    // delete book by id
    Book.findOneAndDelete({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch(next);
});


router.delete('/books', (req, res, next) => {
    // delete all books
    Book.deleteMany({})
        .then((data) => res.json(data))
        .catch(next);
});

module.exports = router;
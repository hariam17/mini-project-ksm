const express = require('express');
const router = express.Router();
const BookController = require('../controller/books.js');

// READ ALL Books - GET
router.get('/', BookController.getAllBooks);

// CREATE Books - POST
router.post('/', BookController.createNewBook);

// UPDATE - PATCH
router.patch('/:id', BookController.updateBook);

// DELETE - DELETE
router.delete('/:id', BookController.deleteBook);

// GET ONE BOOK - GET
router.get('/:id', BookController.getOneBook);

module.exports = router
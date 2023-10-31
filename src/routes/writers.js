const express = require('express');
const router = express.Router();
const WriterController = require('../controller/writers.js');

// READ ALL Writers - GET
router.get('/', WriterController.getAllWriters);

// CREATE Writers - POST
router.post('/', WriterController.createNewWriter);

// UPDATE - PATCH
router.patch('/:id', WriterController.updateWriter);

// DELETE - DELETE
router.delete('/:id', WriterController.deleteWriter);

// READ ONE Writer - GET
router.get('/:id', WriterController.getOneWriter);

module.exports = router;
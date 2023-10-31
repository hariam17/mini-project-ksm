const express = require('express');
const router = express.Router();
const PublisherController = require('../controller/publishers.js');

// READ ALL Publishers - GET
router.get('/', PublisherController.getAllPublishers);

// CREATE Publishers - POST
router.post('/', PublisherController.createNewPublisher);

// UPDATE - PATCH
router.patch('/:id', PublisherController.updatePublisher);

// DELETE - DELETE
router.delete('/:id', PublisherController.deletePublisher);

// READ ONE Writer - GET
router.get('/:id', PublisherController.getOnePublisher);

module.exports = router;
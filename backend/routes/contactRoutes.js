const express = require('express');
const { getContact, createContact, getSingleContact, updateContact, deleteContact } = require('../controllers/contactController');
const router = express.Router();

router.get('/', getContact);

router.post('/', createContact);

router.get('/:id', getSingleContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;
const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

// Rotte CRUD per i personaggi
router.get('/', characterController.getAllCharacters);
router.post('/', characterController.addCharacter);
router.put('/:id', characterController.updateCharacter);
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;

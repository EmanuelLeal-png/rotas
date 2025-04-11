const express = require('express');
const path = require('path');
const router = express.Router();

/* rota para o home. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

/* rota para o sobre. */
router.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'sobre.html'));
});

//rota para contato
router.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'contato.html'));
});

module.exports = router;

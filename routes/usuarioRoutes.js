const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.getUsuarios);
router.get('/usuarios/:id', usuarioController.getUsuarioPorId);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);
router.post('/usuarios', usuarioController.createUsuario);
router.put('/usuarios/:id', usuarioController.updateUsuario);



module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/laborController');

router.get('/labor', authController.getLabor);
router.post('/labor', authController.createLabor);
router.put('/labor/:id', authController.updateLabor);
router.delete('/labor/:id', authController.deleteLabor);

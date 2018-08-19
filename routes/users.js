const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

router.post('/register', userController.create);
router.delete('/delete/:userId', userController.delete);
router.post('/login', userController.login);

module.exports = router;

const express = require('express');
const router = express.Router();

const { memberController } = require('../controllers');

router.post('/signup', memberController.signUp);

module.exports = router;

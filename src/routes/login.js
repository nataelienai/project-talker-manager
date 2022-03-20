const express = require('express');
const credentialValidator = require('../middlewares/credentialValidator');
const { signIn } = require('../controllers/login');

const router = express.Router();

router.post('/', credentialValidator, signIn);

module.exports = router;

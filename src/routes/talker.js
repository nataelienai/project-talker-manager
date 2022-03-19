const express = require('express');
const { getTalkers } = require('../controllers/talker');

const router = express.Router();

router.get('/', getTalkers);

module.exports = router;

const express = require('express');
const { getTalkers, getTalker } = require('../controllers/talker');

const router = express.Router();

router.get('/', getTalkers);

router.get('/:id', getTalker);

module.exports = router;

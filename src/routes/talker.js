const express = require('express');
const tokenAuthenticator = require('../middlewares/tokenAuthenticator');
const talkerNameValidator = require('../middlewares/talkerNameValidator');
const talkerAgeValidator = require('../middlewares/talkerAgeValidator');
const talkerTalkValidator = require('../middlewares/talkerTalkValidator');
const {
  getTalkers,
  getTalker,
  createTalker,
  updateTalker,
  deleteTalker,
  searchTalker,
} = require('../controllers/talker');

const router = express.Router();

router.get('/', getTalkers);

router.get('/search', tokenAuthenticator, searchTalker);

router.get('/:id', getTalker);

router.post('/', tokenAuthenticator, talkerNameValidator, talkerAgeValidator,
  talkerTalkValidator, createTalker);

router.put('/:id', tokenAuthenticator, talkerNameValidator, talkerAgeValidator,
  talkerTalkValidator, updateTalker);

router.delete('/:id', tokenAuthenticator, deleteTalker);

module.exports = router;

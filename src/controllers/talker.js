const rescue = require('express-rescue');
const readParsedContentFromFile = require('../utils/readParsedContentFromFile');

const TALKER_FILE_PATH = './talker.json';

const getTalkers = rescue(async (_req, res) => {
  const talkers = await readParsedContentFromFile(TALKER_FILE_PATH);
  res.status(200).json(talkers);
});

module.exports = { getTalkers };

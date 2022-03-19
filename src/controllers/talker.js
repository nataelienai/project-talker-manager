const fs = require('fs/promises');
const rescue = require('express-rescue');

const TALKER_FILE_PATH = './talker.json';

exports.getTalkers = rescue(async (_req, res) => {
  const fileContent = await fs.readFile(TALKER_FILE_PATH, 'utf-8');
  const talkers = JSON.parse(fileContent);

  res.status(200).json(talkers);
});

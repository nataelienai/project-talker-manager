const fs = require('fs/promises');

const TALKER_FILE_PATH = './talker.json';

async function getTalkers(_req, res, next) {
  try {
    const fileContent = await fs.readFile(TALKER_FILE_PATH, 'utf-8');
    const talkers = JSON.parse(fileContent);
    res.status(200).json(talkers);
  } catch (error) {
    next(error);
  }
}

module.exports = { getTalkers };

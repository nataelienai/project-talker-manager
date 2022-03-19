const fs = require('fs/promises');

const TALKER_FILE_PATH = './talker.json';

async function getTalkers(_req, res) {
  try {
    const fileContent = await fs.readFile(TALKER_FILE_PATH, 'utf-8');
    const talkers = JSON.parse(fileContent);
    res.status(200).json(talkers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getTalkers };

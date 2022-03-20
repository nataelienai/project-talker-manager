const fs = require('fs/promises');

const TALKER_FILE_PATH = './talker.json';

const readTalkers = async () => {
  const fileContent = await fs.readFile(TALKER_FILE_PATH, 'utf-8');
  return JSON.parse(fileContent);
};

module.exports = { readTalkers };

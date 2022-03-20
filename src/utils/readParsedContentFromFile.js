const fs = require('fs/promises');

const readParsedContentFromFile = async (path) => {
  const fileContent = await fs.readFile(path, 'utf-8');
  return JSON.parse(fileContent);
};

module.exports = readParsedContentFromFile;

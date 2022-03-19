const express = require('express');
const fs = require('fs/promises');

const TALKERS_FILE_PATH = './talker.json';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const fileContent = await fs.readFile(TALKERS_FILE_PATH, 'utf-8');
    const talkers = JSON.parse(fileContent);
    res.status(200).json(talkers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

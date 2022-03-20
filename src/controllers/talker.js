const rescue = require('express-rescue');
const { readTalkers } = require('../utils/fs-utils');

const getTalkers = rescue(async (_req, res) => {
  const talkers = await readTalkers();
  res.status(200).json(talkers);
});

const getTalker = rescue(async (req, res, next) => {
  const id = Number(req.params.id);
  const talkers = await readTalkers();
  const wantedTalker = talkers.find((talker) => talker.id === id);

  if (!wantedTalker) {
    const error = new Error('Pessoa palestrante não encontrada');
    error.status = 404;
    return next(error);
  }
  res.status(200).json(wantedTalker);
});

module.exports = {
  getTalker,
  getTalkers,
};

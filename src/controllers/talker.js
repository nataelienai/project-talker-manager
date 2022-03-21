const rescue = require('express-rescue');
const { getAllTalkers, getAvailableId, addTalker } = require('../utils/db-utils');

const getTalkers = rescue(async (_req, res) => {
  const talkers = await getAllTalkers();
  res.status(200).json(talkers);
});

const getTalker = rescue(async (req, res, next) => {
  const id = Number(req.params.id);
  const talkers = await getAllTalkers();
  const wantedTalker = talkers.find((talker) => talker.id === id);

  if (!wantedTalker) {
    const error = new Error('Pessoa palestrante não encontrada');
    error.status = 404;
    return next(error);
  }
  res.status(200).json(wantedTalker);
});

const createTalker = rescue(async (req, res) => {
  const { name, age, talk } = req.body;
  const id = await getAvailableId();
  const talker = { id, name, age, talk };

  await addTalker(talker);

  res.status(201).json(talker);
});

module.exports = {
  getTalker,
  getTalkers,
  createTalker,
};

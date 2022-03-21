const rescue = require('express-rescue');
const {
  getAllTalkers,
  getAvailableId,
  addTalker,
  getTalkerById,
  editTalker,
  removeTalker,
} = require('../utils/db-utils');

const getTalkers = rescue(async (_req, res) => {
  const talkers = await getAllTalkers();
  res.status(200).json(talkers);
});

const getTalker = rescue(async (req, res, next) => {
  const id = Number(req.params.id);
  const talker = await getTalkerById(id);

  if (!talker) {
    const error = new Error('Pessoa palestrante não encontrada');
    error.status = 404;
    return next(error);
  }
  res.status(200).json(talker);
});

const createTalker = rescue(async (req, res) => {
  const { name, age, talk } = req.body;
  const id = await getAvailableId();
  const talker = { id, name, age, talk };

  await addTalker(talker);
  res.status(201).json(talker);
});

const updateTalker = rescue(async (req, res) => {
  const id = Number(req.params.id);
  const { name, age, talk } = req.body;
  const talker = { id, name, age, talk };

  await editTalker(talker);
  res.status(200).json(talker);
});

const deleteTalker = rescue(async (req, res) => {
  const id = Number(req.params.id);

  await removeTalker(id);
  res.status(204).end();
});

module.exports = {
  getTalker,
  getTalkers,
  createTalker,
  updateTalker,
  deleteTalker,
};

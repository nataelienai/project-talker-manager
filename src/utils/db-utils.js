const { readTalkers, writeTalkers } = require('./fs-utils');

const getAllTalkers = () => readTalkers();

const getTalkerById = async (id) => {
  const talkers = await getAllTalkers();
  const wantedTalker = talkers.find((talker) => talker.id === id);

  return wantedTalker;
};

const getAvailableId = async () => {
  const talkers = await readTalkers();
  const lastId = talkers.reduce((maxId, { id }) => (
    id > maxId ? id : maxId
  ), 0);

  return lastId + 1;
};

const addTalker = async (talker) => {
  const talkers = await readTalkers();
  talkers.push(talker);
  await writeTalkers(talkers);
};

const editTalker = async (editedTalker) => {
  const talkers = await readTalkers();
  const index = talkers.findIndex((talker) => talker.id === editedTalker.id);
  console.log({ ...editedTalker, talk: { ...editedTalker.talk } }, 'destruct');
  talkers[index] = { ...editedTalker, talk: { ...editedTalker.talk } };
  console.log(talkers, 'talkers');
  await writeTalkers(talkers);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  getAvailableId,
  addTalker,
  editTalker,
};

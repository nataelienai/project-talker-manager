const { readTalkers, writeTalkers } = require('./fs-utils');

const getAllTalkers = () => readTalkers();

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

module.exports = {
  getAllTalkers,
  getAvailableId,
  addTalker,
};
